class Bottom2 {
    constructor() {
        this.isAgree = true;
        this.formData = {
            name: '',
            phone: ''
        };
        this.errors = {};

        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        const submitBtn = document.querySelector('.bottom2__btn');
        submitBtn.addEventListener('click', () => this.createRequest());

        const toggle = document.querySelector('.bottom2__toggle');
        toggle.addEventListener('click', () => this.toggleAgreement());

        const nameInput = document.querySelector('.bottom2__form-input[type="text"]');
        const phoneInput = document.querySelector('.bottom2__form-input[type="tel"]');

        nameInput.addEventListener('input', (e) => this.handleInputChange('name', e.target.value));
        phoneInput.addEventListener('input', (e) => this.handlePhoneChange(e));

        // Сохраняем ссылки на элементы
        this.nameInput = nameInput;
        this.phoneInput = phoneInput;
    }

    handleInputChange(field, value) {
        this.formData[field] = value;

        if (this.errors[field]) {
            this.errors[field] = '';
            this.clearError(field);
        }
    }

    handlePhoneChange(e) {
        const input = e.target;
        const newValue = input.value;
        const oldValue = input.getAttribute('data-old-value') || '';

        const isAdding = newValue.length > oldValue.length;

        if (isAdding) {
            let value = newValue.replace(/\D/g, '');

            if (value === '') {
                input.value = '';
                this.handleInputChange('phone', '');
                input.setAttribute('data-old-value', '');
                return;
            }

            if (value.startsWith('7')) {
                value = value.substring(1);
            }

            // Ограничение на 10 цифр (без +7)
            if (value.length > 10) {
                input.value = oldValue; // Возвращаем предыдущее значение
                return;
            }

            let formattedValue = '+7';

            if (value.length > 0) {
                formattedValue += ' (' + value.substring(0, 3);
            }
            if (value.length > 3) {
                formattedValue += ') ' + value.substring(3, 6);
            }
            if (value.length > 6) {
                formattedValue += '-' + value.substring(6, 8);
            }
            if (value.length > 8) {
                formattedValue += '-' + value.substring(8, 10);
            }

            input.value = formattedValue;
            this.handleInputChange('phone', formattedValue);
            input.setAttribute('data-old-value', formattedValue);
        } else {
            // При удалении символов
            this.handleInputChange('phone', newValue);
            input.setAttribute('data-old-value', newValue);
        }
    }

    toggleAgreement() {
        this.isAgree = !this.isAgree;
        const toggle = document.querySelector('.bottom2__toggle');
        const btn = document.querySelector('.bottom2__btn');
        toggle.classList.toggle('active', this.isAgree);
        btn.classList.toggle('disabled');

        if (this.errors.agree) {
            this.errors.agree = '';
            this.clearAgreeError();
        }
    }

    createRequest() {
        if (this.isAgree) {
            const newErrors = {};

            if (!this.formData.name.trim()) {
                newErrors.name = 'Поле не заполнено';
            }

            if (!this.formData.phone.trim()) {
                newErrors.phone = 'Поле не заполнено';
            } else if (this.formData.phone.replace(/\D/g, '').length < 11) {
                newErrors.phone = 'Неверный формат телефона';
            }

            this.errors = newErrors;
            this.updateErrorsUI();

            if (Object.keys(newErrors).length === 0) {
                const requestCall = {
                    name: this.formData.name.trim(),
                    phone: this.formData.phone.replace(/\D/g, ''),
                };

                console.log('Отправка данных:', requestCall);

                this.formData = {
                    name: '',
                    phone: ''
                };

                this.nameInput.value = '';
                this.phoneInput.value = '';
                this.isAgree = true;

                // Сброс UI
                this.clearAllErrors();
                document.querySelector('.bottom2__toggle').classList.add('active');
            }
        }
    }

    updateErrorsUI() {
        this.clearAllErrors();

        if (this.errors.name) {
            const nameForm = document.querySelector('.bottom2__form:first-child');
            nameForm.classList.add('unapprecial');
            this.nameInput.placeholder = this.errors.name;
        }

        if (this.errors.phone) {
            const phoneForm = document.querySelector('.bottom2__form:nth-child(2)');
            phoneForm.classList.add('unapprecial');
            this.phoneInput.placeholder = this.errors.phone;
        }
    }

    clearError(field) {
        if (field === 'name') {
            const nameForm = document.querySelector('.bottom2__form:first-child');
            nameForm.classList.remove('unapprecial');
            this.nameInput.placeholder = "Введите имя";
        }

        if (field === 'phone') {
            const phoneForm = document.querySelector('.bottom2__form:nth-child(2)');
            phoneForm.classList.remove('unapprecial');
            this.phoneInput.placeholder = "+7 (___) - ___ - __ - __";
        }
    }

    clearAgreeError() {
        const agreeToggle = document.querySelector('.bottom2__agree-togle');
        agreeToggle.classList.remove('unapprecial');
    }

    clearAllErrors() {
        document.querySelectorAll('.bottom2__form').forEach(form => {
            form.classList.remove('unapprecial');
        });

        this.nameInput.placeholder = "Введите имя";
        this.phoneInput.placeholder = "+7 (___) - ___ - __ - __";
    }
}

// Инициализация после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    new Bottom2();
});
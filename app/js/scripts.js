
function regform_submit(){
	valid = false;
	var fields = document.getElementsByClassName('reg-form__input');
	Array.prototype.forEach.call(fields, function(el){
		validate(el);
	});
	var invalid_inputs = document.getElementsByClassName('reg-form__input_invalid');
	if (invalid_inputs.length === 0) {
		alert('Successful registration');
		valid = true;
	} 
	return valid;
};

function regexp_validate(re, field){
	if (re.test(field.value)) {
		field.classList.add('reg-form__input_valid');
		if (field.classList.contains('reg-form__input_invalid')){
			field.classList.remove('reg-form__input_invalid');
		}
		var error_block = field.nextElementSibling;
		error_block.classList.remove('tooltip_visible');
	} else{
		field.classList.add('reg-form__input_invalid');
		if (field.classList.contains('reg-form__input_valid')){
			field.classList.remove('reg-form__input_valid');
		}
		var error_block = field.nextElementSibling;
		error_block.classList.add('tooltip_visible');
	}
};

function validate(field){
	if (field.name === 'name') {
		var re = /^[a-zA-Z\-]+$/;
		regexp_validate(re, field);
	} else 
	if (field.name === 'second-name') {
		var re = /^[a-zA-Z\-]+$/;
		regexp_validate(re, field);
	} else 
	if (field.name === 'surname') {
		var re = /^[a-zA-Z\-]+$/;
		regexp_validate(re, field);
	} else 
	if (field.name === 'email') {
		var re = /.+@.+\..+/i;
		regexp_validate(re, field);
	} else 
	if (field.name === 'phone') {
		var re = /^[0-9()\-+ ]+$/;
		regexp_validate(re, field);
	} else 
	if (field.name === 'login') {
		var re = /^[a-zA-Z0-9\-\_]+$/;
		regexp_validate(re, field);
	} else 
	if (field.name === 'password') {
		var re = /(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
		regexp_validate(re, field);
	} else 
	if (field.name === 'confirmpassword') {
		var password = document.getElementsByClassName('reg-form__input_password')[0];
		if ((password.value === field.value) && (field.value.length > 0)) {
			field.classList.add('reg-form__input_valid');
			if (field.classList.contains('reg-form__input_invalid')){
				field.classList.remove('reg-form__input_invalid');
			}
			var error_block = field.nextElementSibling;
			error_block.classList.remove('tooltip_visible');
		} else{
			field.classList.add('reg-form__input_invalid');
			if (field.classList.contains('reg-form__input_valid')){
				field.classList.remove('reg-form__input_valid');
			}
			var error_block = field.nextElementSibling;
			error_block.classList.add('tooltip_visible');
		}
	} 
}
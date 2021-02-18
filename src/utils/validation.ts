export const isEmailValid = (email: string) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

export const isPhoneNumberValid = (phone: string) => {
  return /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(
    phone,
  );
};

export const isPhone = (phone: string) => {
  return /^\d+$/.test(phone);
};

export const getLoginField = (value: string): object => {
  if (isPhone(value)) {
    return {
      phone: value,
      email: undefined,
    };
  }

  return {
    email: value,
    phone: undefined,
  };
};

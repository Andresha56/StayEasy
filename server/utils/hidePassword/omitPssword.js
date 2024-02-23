export const omitPassword = (user) => {
    const { password, ...otherDetailsExceptPassword } = user._doc;
    return otherDetailsExceptPassword;
};

export const capitalizeFirstLetter = (value: any) => {
    if (value) {
        return value[0].toUpperCase() + value.slice(1);
    }
    return value;
}

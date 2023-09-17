export const getBgColor = variant=> {
    switch (variant) {
        case "id-1":
            return "rgb (255, 0, 0)";
        case "id-2":
return "rgb (0, 255, 0)";
case "id-3":
return "rgb (0, 0, 255)";
case "id-4":
return "rgb (255, 255, 0)";
case "id-5":
return "rgb (0, 255, 255)";
default: throw new Error(`Unsupported variant prop value - ${variant}`);
}
};
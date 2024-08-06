"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useForm = useForm;
const react_1 = require("react");
function useForm() {
    const refs = (0, react_1.useRef)([]);
    const getFields = () => {
        const obj = {};
        refs.current.forEach((ref) => { var _a; return (obj[ref.name] = (_a = ref.ref.current) === null || _a === void 0 ? void 0 : _a.value); });
        return obj;
    };
    const init = (0, react_1.useCallback)((name) => {
        var _a;
        const ref = (0, react_1.createRef)();
        (_a = refs.current) === null || _a === void 0 ? void 0 : _a.push({ name, ref });
        return {
            ref,
        };
    }, []);
    return {
        init,
        formState: { getFields },
    };
}

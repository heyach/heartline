// 数组扁平化所有的children
interface Option {
    children: Array<Object>
}
// 参数是一个数组，数组的每个项都要有一个children
function flatArrayChildren(array: Array<Option>) {
    let res = [];
    function h(arr) {
        arr.forEach((item) => {
            res.push(item);
            item.children && h(item.children);
        });
    }
    h(array);
    return res;
}

export default flatArrayChildren
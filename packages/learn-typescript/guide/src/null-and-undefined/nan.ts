/**
 * 结论:
 * 1.NaN是一个number类型的变量
 * 2.NaN虽然是一个变量，却不能参与比大小
 */
export const tNan = () => {
    console.log("NaN:", NaN);
    console.log("NaN > 0:", NaN > 0);
    console.log("NaN == 0:", NaN == 0);
    console.log("NaN < 0:", NaN < 0);
    console.log("typeof NaN:", typeof NaN);
    console.log("NaN == NaN:", NaN == NaN);
    console.log("NaN === NaN:", NaN === NaN);
}
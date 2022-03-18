function transform(phase) {
    const phases = phase;
    let i = 0;

    return () => {
        if (i < phases.length)
            phases[i++]();
        else {
            i = 0;
            phases[i++]();
        }
    }
}

const folder = "img/";
const levels = [
    () => saiyan.src = folder + "goku_0.png",
    () => saiyan.src = folder + "goku_1.png",
    () => saiyan.src = folder + "goku_2.png",
    () => saiyan.src = folder + "goku_3.png",
    () => saiyan.src = folder + "goku_4.png",
    () => saiyan.src = folder + "goku_5.png"
];

const t = transform(levels);
t();

btnTransform.addEventListener("click", () => {
    t();
});


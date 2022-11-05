
function App() {
    return (
        <div className="App">
            <main className="max-h-screen overflow-y-scroll snap snap-y snap-proximity">
                <div className="w-full h-screen bg-gray-800 snap-start flex flex-col justify-center items-center">
                    <h1
                        className="font-BOLD text-8xl bg-clip-text bg-gradient-to-r from-red-500 to-blue-600 text-transparent transform transition-all duration-300 ease-in scale-0"
                        data-replace='{ "scale-0": "scale-100" }'
                    >
                        Aanish Bhirud
                    </h1>
                    <p className="font-light text-2xl text-gray-300">
                        CSS Learning demo
                    </p>
                </div>
                <div className="w-full h-screen bg-slate-700 snap-start flex flex-col justify-center items-center">
                    <h1 className="font-BOLD text-5xl text-gray-300">
                        Proximity Scroll Snapping!!!
                    </h1>
                    <p className="font-light text-2xl text-gray-300">
                        Scroll snaps to the top of the div if it is close to the
                        top.
                    </p>
                </div>
                <div className="w-full h-screen bg-gray-800 snap-start flex flex-col justify-center items-center">
                    <h1 className="font-BOLD text-5xl text-gray-300">
                        Made with Tailwind CSS & React
                    </h1>
                </div>
                <div className="w-full h-screen bg-slate-700 snap-start flex flex-col justify-center items-center">
                    <h1 className="font-BOLD text-5xl text-gray-300">
                        <a href="https://baanish-portfolio-deno.deno.dev/">
                            Check out my portfolio
                        </a>
                    </h1>
                    <a href="https://baanish-portfolio-deno.deno.dev/" className="text-3xl text-blue-500 hover:text-blue-700 hover:underline">
                        baanish-portfolio-deno.deno.dev
                    </a>
                </div>
            </main>
        </div>
    );
}

// from https://devdojo.com/tnylea/animating-tailwind-transitions-on-page-load
export default App;
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        var replacers = document.querySelectorAll("[data-replace]");
        for (var i = 0; i < replacers.length; i++) {
            let replaceClasses = JSON.parse(
                replacers[i].dataset.replace.replace(/'/g, '"')
            );
            Object.keys(replaceClasses).forEach(function (key) {
                replacers[i].classList.remove(key);
                replacers[i].classList.add(replaceClasses[key]);
            });
        }
    }, 1);
});

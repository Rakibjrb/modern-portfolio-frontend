import Image from "next/image";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950">
            <div className="fixed top-0 left-0 w-full h-1 bg-slate-900 overflow-hidden">
                <div className="h-full w-full bg-blue-600 animate-progress-bar origin-left"></div>
            </div>

            <div className="flex flex-col items-center gap-4">
                <div className="relative">
                    <Image src="/rocket.gif" alt="Rocket" width={150} height={250} className="w-[150px] h-[250px]" />
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 bg-slate-800 rounded-full blur-sm animate-pulse"></div>
                </div>
                <p className="text-sm font-medium tracking-widest text-slate-500 dark:text-slate-400 uppercase animate-pulse">
                    Loading Portfolio
                </p>
            </div>
        </div>
    );
}
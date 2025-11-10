import { subscribe } from "diagnostics_channel";
import { DM_Sans, Poppins } from "next/font/google";

export const dmsans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "600"],
});

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ["400","600"],
})
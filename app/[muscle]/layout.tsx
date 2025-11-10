export default function MusclesLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    )
}
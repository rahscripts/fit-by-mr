export default function MusclesLayout({ children }: {
    children: React.ReactNode;
}) {
    // Nested layouts must not include <html> or <body> tags.
    // Keep this file as a simple wrapper so the route renders correctly.
    return (
        <div className="min-h-screen">
            {children}
        </div>
    );
}
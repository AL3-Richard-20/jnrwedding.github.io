export default function Footer({ title }) {

    return (
        <footer className="py-16 bg-surface border-t border-outline-variant/15 text-center">
            <div className="flex justify-center gap-4 text-primary mb-8">
            <span className="material-symbols-outlined" data-icon="all_inclusive">all_inclusive</span>
            </div>
            <p className="font-headline text-2xl font-bold text-on-background mb-2">{ title }</p>
            <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Made with love • 2026</p>
        </footer>
    )
}
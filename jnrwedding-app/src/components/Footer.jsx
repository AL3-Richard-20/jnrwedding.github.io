export default function Footer({ title }) {

    return (
        <footer class="py-16 bg-surface border-t border-outline-variant/15 text-center">
            <div class="flex justify-center gap-4 text-primary mb-8">
            <span class="material-symbols-outlined" data-icon="all_inclusive">all_inclusive</span>
            </div>
            <p class="font-headline text-2xl font-bold text-on-background mb-2">{ title }</p>
            <p class="font-label text-xs uppercase tracking-widest text-on-surface-variant">Made with love • 2026</p>
        </footer>
    )
}
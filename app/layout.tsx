import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'Nidomiva — La tua prossima casa',description:'Appartamenti, persone e un interesse reciproco. Italiano, français, Deutsch.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="it"><body>{children}</body></html>}

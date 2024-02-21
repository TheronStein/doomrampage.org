import Navigation from './navigation';
import Footer from './footer';
 
export default function Layout({ children }) {



    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
  
    return (
    <>
      <Navbar links={data.links} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
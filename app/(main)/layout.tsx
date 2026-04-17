import {Footer, Navbar} from '../../containers';

export default function RootLayout(props: LayoutProps<'/'>) {
  return (
    <div className='w-full max-w-[100vw] min-h-screen overflow-x-hidden flex flex-col justify-start items-center'>
      <Navbar />
      <div className='flex-1'>{props.children}</div>
      <Footer />
    </div>
  );
}

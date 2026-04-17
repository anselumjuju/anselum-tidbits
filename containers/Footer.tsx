import {Stack, Typography} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import {logo} from '../app/assets';

const Footer = () => {
  return (
    <div className='w-[100%] md:w-[90%] max-w-screen-2xl mt-5 lg:mt-20 mx-auto px-5 md:p-10 py-10 rounded-t-3xl bg-primary-background'>
      <Stack direction={{xs: 'column', md: 'row'}} justifyContent={'space-between'} gap={{xs: 6, md: 10, lg: 20}}>
        <Stack sx={{maxWidth: {xs: '100%', md: '50%'}}} gap={2}>
          <Link href='/' passHref>
            <div className='py-2 flex items-center gap-x-2 pointer-events-auto'>
              <Image width={30} height={30} src={logo} alt='logo' />
              <p className='h-6 xl:h-6 text-2xl font-bold font-gluten select-none text-white'>Anselum</p>
            </div>
          </Link>
          <Typography sx={{width: {xs: '100%', md: '70%'}, color: 'gray', letterSpacing: '0.9px', lineHeight: '1.6'}}>
            Exploring ideas, sharing insights, and celebrating creativity one post at a time. Stay tuned for the latest updates and join the conversation!
          </Typography>
        </Stack>
      </Stack>
      <div className='w-full flex flex-col items-stretch md:gap-y-3 mt-14 relative'>
        <p className='absolute text-gray-500 text-sm right-5 top-5'>@ 2024</p>
        <div className='w-full h-[1px] bg-gray-300' />
        <h1 className='pt-12 md:py-0 text-[9vw] 2xl:text-[140px] text-center font-light font-blackOpsOne text-secondary-background text-nowrap'>Anselum Tidbits</h1>
      </div>
    </div>
  );
};

export default Footer;

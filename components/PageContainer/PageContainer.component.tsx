import { PropsWithChildren } from 'react';
import { Container } from '@mui/material';

function PageContainer(props: PropsWithChildren) {
  return <div className="transition-colors duration-500 bg-neutral-300 dark:bg-neutral-800">
    <Container maxWidth="md" className="flex gap-8 min-h-screen pt-16 pb-20">
        { props.children }
    </Container>;
  </div>
}

export default PageContainer;
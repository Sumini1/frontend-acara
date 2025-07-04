
import { Fragment } from 'react';
import PageHead from '../commons/PageHead/PageHead';
import { ReactNode } from "react";

interface PropTypes {
  children?: ReactNode;
  title?: string;
}

    

const AuthLayout = (props: PropTypes) => {
    const { children, title } = props;
    return (
<Fragment>
<PageHead title={title} />
<section className="max-w-screen-3xl 3xl:container p-6">{children} </section>
</Fragment>
    );
};

export default AuthLayout;
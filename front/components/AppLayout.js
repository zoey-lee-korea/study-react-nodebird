import PropTypes from 'prop-types';
import Link from 'next/link';

const AppLayout = ({children}) => {
    return (
        <div>
            <Link href="/"><a>메인</a></Link>
            <Link href="/signup"><a>회원가입</a></Link>
            <Link href="/profile"><a>프로필</a></Link>
            {children}
        </div>
    );
};

AppLayout.prototype = {
    children : PropTypes.node.isRequired,
}

export default AppLayout;






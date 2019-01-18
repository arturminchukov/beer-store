import * as React from 'react';
import Spinner from '../Spinner/Spinner';
import './InfiniteScroll.css';

const THRESHOLD = 600;

export class InfiniteScroll extends React.Component {
    constructor(props) {
        super(props);

        this.onScroll = this.handleScroll.bind(this);
        this.scrollRef = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('scroll', this.onScroll, {passive: true});
        this.onScroll();
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.onScroll);
    }

    handleScroll() {
        const container = this.scrollRef.current;

        if (!container || !this.props.next || this.props.isLoading) {
            return;
        }

        const containerHeight = container.children && container.children[0]
            && container.children[0].clientHeight;
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;

        if (scrollTop + windowHeight > containerHeight - THRESHOLD) {
            this.nextPage();
        }
    }

    async nextPage() {
        try {
            await this.props.fetchNext(this.props.next);
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <div className='InfiniteScroll' ref={this.scrollRef}>
                {this.props.children}
                {this.props.isLoading && <div className='InfiniteScroll__spinner'><Spinner /></div>}
            </div>
        );
    }
}

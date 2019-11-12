import React, { Component} from 'react';
import styles from './style.css';

import { connect } from 'react-redux';

class List extends Component {
    constructor() {
        super();
        this.state = {            
            quanNews: 2,
        }

        this.toggleShow = this.toggleShow.bind(this);       
    }

    toggleShow() {        
        this.setState({
            quanNews: this.state.quanNews + 2
        });
    }    

	render() {
        const data = this.props.data;        
        const {quanNews} = this.state;   
		return (
            <>
                <button
                    className={styles.toggleNews}
                    onClick={ this.toggleShow }
                >
                    toggle 2 news
                </button>
                <ul className={styles.News}>
                    {
                        data.slice([0], [quanNews]).map(news => (
                            <li className={styles.Topic} key={news.id}>                                
                                {news.text}
                            </li>
                        ))
                    }                   
                </ul>               
            </>                    
        );
	}
}

const mapStateToProps = store => ({ data: store });

export default connect(mapStateToProps)(List);
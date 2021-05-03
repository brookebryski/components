import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
    <div className="ui container comments">
    <CommentDetail 
    author="Sam" 
    timeAgo="Today at 4:45PM" 
    text="Great post!"
    avatar={faker.image.avatar()}
    />
    <CommentDetail 
    author="Alex" 
    timeAgo="Today at 2:00AM" 
    text="Nice blog post!"
    avatar={faker.image.avatar()}
    />
    <CommentDetail 
    author="Jane" 
    timeAgo="Today at 5:00PM" 
    text="Loved this!"
    avatar={faker.image.avatar()}
    />
    </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));


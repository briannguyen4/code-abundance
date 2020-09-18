import React from 'react';
import { Link } from 'react-router-dom';
import AltNavbarContainer from '../navbar/alt_navbar_container';
import Sidebar from '../main/sidebar';
import Footer from '../main/footer';
import AnswerContainer from '../answers/answer_container';
import AnswerFormContainer from '../answers/answer_form_container';
import ReactQuill from 'react-quill';

class QuestionShow extends React.Component {
    constructor(props) {
      super(props);
      this.deleteQuestion = this.deleteQuestion.bind(this);
      this.upvote = this.upvote.bind(this);
      this.downvote = this.downvote.bind(this);

    }

    componentDidMount() {
      this.props.getQuestion(this.props.questionId);
    }

    deleteQuestion() {
      this.props.deleteQuestion(this.props.questionId)
       .then( () => this.props.history.push('/questions'))
    }

    upvote() {
      this.props.upvote(this.props.questionId)
    }

    downvote() {
      this.props.downvote(this.props.questionId)
    }

    render() {
      if (this.props.question === undefined) {
        return null;
      } else {
        return (
          <>
          <AltNavbarContainer/>
          <div className="question-show-container">
            <Sidebar />
            <div className="question-show">
              <div className="question-show-top">
                <p className="question-show-top__title">{this.props.question.title}</p>
                <div>
                    <Link to="questions/new">Ask Question</Link>
                </div>   
              </div>
              
              <div className="question-show-left">
                    {this.props.question.votes ? 
                      (<div className="question-show-left__votes">

                        <div class="arrow-up"></div>
                        <div>{this.props.question.votes.score}</div>
                        <div class="arrow-down"></div>

                        {/* <button onClick={this.upvote}>Upvote</button>
                        <div>{this.props.question.votes.score}</div>
                        <button onClick={this.downvote}>Downvote</button> */}
                      </div>
                      ) : null}
            
                <div className="question-show__question">
                 <ReactQuill
                    value={this.props.question.body}
                    readOnly={true}
                    modules={{toolbar: false}}
                  />

                  {this.props.question.author_id === this.props.currentUserId ? 
                  (<div className="question-show__question__buttons">
                    <Link to={`/questions/${this.props.questionId}/edit`}>
                      edit
                    </Link>
                    <a onClick={this.deleteQuestion}>
                      delete
                    </a>
                  </div>) : null}
                </div>

              </div>
                  {this.props.question.answers ? 
                    (<div className="question-show__answers">
                      {this.props.question.answers.length > 0 ? (
                        <p className="question-show__answers__header">{this.props.question.answers.length} Answers</p>
                      ) : null}
                        <ul>
                          {this.props.question.answers.map((answer, idx) => (
                          <li key={`answer${idx}`}>
                            <AnswerContainer questionId={this.props.questionId} answer={answer}/>
                          </li>
                          ))}
                        </ul>
                      </div>): null}

                <AnswerFormContainer questionId={this.props.questionId}/>
            </div>
          </div>
          <Footer/>
          </>
        );
      }
    }

  
}

export default QuestionShow;
import uuid from 'uuid';
export default function quotesReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_QUOTE':
      const quote = {
        id: action.quote.id,
        content: action.quote.content,
        author: action.quote.author,
        votes: action.quote.votes
      }
      return state.concat(quote);
    
     case 'REMOVE_QUOTE':
       return state.filter(quote => quote.id !== action.quoteId)
      
     case 'UPVOTE_QUOTE':
       const upvoteQuote = state.find(quote => quote.id === action.quoteId);
       upvoteQuote.votes += 1;
       return state
      
      case 'DOWNVOTE_QUOTE':
        const downvoteQuote = state.find(quote => quote.id === action.quoteId);
        if (downvoteQuote.votes > 0) {
          downvoteQuote.votes -= 1;
        } 
        return state

      default:
        return state;
  }
}

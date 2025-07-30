// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getSingleBlogData } from '../actions/BlogAction';
// import { useParams, useNavigate } from 'react-router-dom';
// import { getCommentsByBlogId, addComment } from '../actions/CommentAction';
// import { getLikeCount, addLike, removeLike } from '../actions/LikeAction';

// const BlogDetails = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const blog = useSelector(state => state.blog.single);
//   const loading = useSelector(state => state.blog.loading);
//   const comments = useSelector(state => state.comment.comments);
//   const likeCount = useSelector(state => state.like.likeCount);

//   const [liked, setLiked] = useState(false); 
//   const [name, setName] = useState('');
//   const [commentText, setCommentText] = useState('');

//   useEffect(() => {
//     dispatch(getSingleBlogData(id));
//     dispatch(getCommentsByBlogId(id));
//     dispatch(getLikeCount(id));
//   }, [dispatch, id]);

//   const toggleLike = () => {
//     if (liked) {
//       dispatch(removeLike(id));
//     } else {
//       dispatch(addLike(id));
//     }
//     setLiked(!liked);
//     setTimeout(() => {
//       dispatch(getLikeCount(id));
//     }, 300);
//   };

//   const handleCommentSubmit = () => {
//     if (!name || !commentText) return alert('Please fill all fields');
//     dispatch(addComment(id, { name, comment: commentText }));
//     setName('');
//     setCommentText('');
//     setTimeout(() => {
//       dispatch(getCommentsByBlogId(id));
//     }, 500);
//   };

//   const styles = {
//     container: {
//       maxWidth: '800px',
//       margin: '0 auto',
//       padding: '20px',
//       fontFamily: 'Arial, sans-serif',
//       color: '#333'
//     },
//     blogImg: {
//       width: '100%',
//       height: 'auto',
//       borderRadius: '8px'
//     },
//     blogTitle: {
//       fontSize: '28px',
//       fontWeight: 'bold',
//       margin: '20px 0 10px'
//     },
//     blogDescription: {
//       fontSize: '18px',
//       lineHeight: '1.6',
//       marginBottom: '20px'
//     },
//     likes: {
//       fontSize: '16px',
//       marginBottom: '30px',
//       cursor: 'pointer'
//     },
//     commentsSection: {
//       borderTop: '1px solid #ccc',
//       paddingTop: '20px'
//     },
//     comment: {
//       background: '#f9f9f9',
//       padding: '10px',
//       borderRadius: '5px',
//       marginBottom: '15px'
//     },
//     commentName: {
//       fontWeight: 'bold',
//       marginBottom: '5px'
//     },
//     commentText: {
//       fontSize: '15px'
//     },
//     commentForm: {
//       marginTop: '20px',
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '10px'
//     },
//     input: {
//       padding: '10px',
//       fontSize: '16px',
//       border: '1px solid #ccc',
//       borderRadius: '5px'
//     },
//     textarea: {
//       padding: '10px',
//       fontSize: '16px',
//       height: '80px',
//       border: '1px solid #ccc',
//       borderRadius: '5px'
//     },
//     button: {
//       padding: '10px 20px',
//       fontSize: '16px',
//       background: '#3498db',
//       color: '#fff',
//       border: 'none',
//       borderRadius: '5px',
//       cursor: 'pointer'
//     },
//     floatingBack: {
//       position: 'fixed',
//       bottom: '40px',
//       left: '40px',
//       backgroundColor: '#3498db',
//       color: '#fff',
//       padding: '40px 16px',
//       borderRadius: '50%',
//       cursor: 'pointer',
//       zIndex: 1000,
//       boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
//       border: 'none'
//     }
//   };

//   if (loading || !blog) {
//     return <div style={styles.container}>Loading...</div>;
//   }

//   return (
//     <>
//       <button style={styles.floatingBack} onClick={() => navigate('/blog')}>
//         ← Go Back
//       </button>

//       <div style={styles.container}>
//         <img src={blog.media_url} alt="Blog" style={styles.blogImg} />
//         <div style={styles.blogTitle}>{blog.title}</div>
//         <div style={styles.blogDescription}>{blog.description}</div>

//         <div style={styles.likes} onClick={toggleLike}>
//           {liked ? '❤️ Liked' : '🤍 Like'} {likeCount}
//         </div>

//         <div style={styles.commentsSection}>
//           <h3>Comments</h3>
//           {comments.length === 0 ? (
//             <div>No comments yet.</div>
//           ) : (
//             comments.map((comment, index) => (
//               <div key={index} style={styles.comment}>
//                 <div style={styles.commentName}>{comment.name}</div>
//                 <div style={styles.commentText}>{comment.comment}</div>
//               </div>
//             ))
//           )}

//           <div style={styles.commentForm}>
//             <input
//               type="text"
//               placeholder="Your name"
//               style={styles.input}
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <textarea
//               placeholder="Write a comment..."
//               style={styles.textarea}
//               value={commentText}
//               onChange={(e) => setCommentText(e.target.value)}
//             ></textarea>
//             <button style={styles.button} onClick={handleCommentSubmit}>
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogDetails;

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getSingleBlogData } from '../actions/BlogAction';
// import { useParams, useNavigate } from 'react-router-dom';
// import { getCommentsByBlogId, addComment } from '../actions/CommentAction';
// import { getLikeCount, addLike, removeLike } from '../actions/LikeAction';

// const BlogDetails = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const blog = useSelector(state => state.blog.single);
//   const loading = useSelector(state => state.blog.loading);
//   const comments = useSelector(state => state.comment.comments);
//   const likeCount = useSelector(state => state.like.likeCount);

//   const [liked, setLiked] = useState(false); 
//   const [name, setName] = useState('');
//   const [commentText, setCommentText] = useState('');

//   useEffect(() => {
//     dispatch(getSingleBlogData(id));
//     dispatch(getCommentsByBlogId(id));
//     dispatch(getLikeCount(id));
//   }, [dispatch, id]);

//   const toggleLike = () => {
//     if (liked) {
//       dispatch(removeLike(id));
//     } else {
//       dispatch(addLike(id));
//     }
//     setLiked(!liked);
//     setTimeout(() => {
//       dispatch(getLikeCount(id));
//     }, 300);
//   };

//   const handleCommentSubmit = () => {
//     if (!name || !commentText) return alert('Please fill all fields');
//     dispatch(addComment(id, { name, comment: commentText }));
//     setName('');
//     setCommentText('');
//     setTimeout(() => {
//       dispatch(getCommentsByBlogId(id));
//     }, 500);
//   };

//   const styles = {
//     container: {
//       maxWidth: '800px',
//       margin: '0 auto',
//       padding: '20px',
//       fontFamily: 'Arial, sans-serif',
//       color: '#333'
//     },
//     blogImg: {
//       width: '100%',
//       height: 'auto',
//       borderRadius: '8px'
//     },
//     blogTitle: {
//       fontSize: '28px',
//       fontWeight: 'bold',
//       margin: '20px 0 10px'
//     },
//     blogDescription: {
//       fontSize: '18px',
//       lineHeight: '1.6',
//       marginBottom: '20px'
//     },
//     likes: {
//       fontSize: '16px',
//       marginBottom: '30px',
//       cursor: 'pointer'
//     },
//     commentsSection: {
//       borderTop: '1px solid #ccc',
//       paddingTop: '20px'
//     },
//     comment: {
//       background: '#f9f9f9',
//       padding: '10px',
//       borderRadius: '5px',
//       marginBottom: '15px'
//     },
//     commentName: {
//       fontWeight: 'bold',
//       marginBottom: '5px'
//     },
//     commentText: {
//       fontSize: '15px'
//     },
//     commentForm: {
//       marginTop: '20px',
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '10px'
//     },
//     input: {
//       padding: '10px',
//       fontSize: '16px',
//       border: '1px solid #ccc',
//       borderRadius: '5px'
//     },
//     textarea: {
//       padding: '10px',
//       fontSize: '16px',
//       height: '80px',
//       border: '1px solid #ccc',
//       borderRadius: '5px'
//     },
//     button: {
//       padding: '10px 20px',
//       fontSize: '16px',
//       background: '#3498db',
//       color: '#fff',
//       border: 'none',
//       borderRadius: '5px',
//       cursor: 'pointer'
//     },
//     floatingBack: {
//       position: 'fixed',
//       bottom: '40px',
//       left: '40px',
//       backgroundColor: '#3498db',
//       color: '#fff',
//       padding: '40px 16px',
//       borderRadius: '50%',
//       cursor: 'pointer',
//       zIndex: 1000,
//       boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
//       border: 'none'
//     }
//   };

//   if (loading || !blog) {
//     return <div style={styles.container}>Loading...</div>;
//   }

//   return (
//     <>
//       <button style={styles.floatingBack} onClick={() => navigate('/')}>
//         ← Go Back
//       </button>

//       <div style={styles.container}>
//         <img src={blog.media_url} alt="Blog" style={styles.blogImg} />
//         <div style={styles.blogTitle}>{blog.title}</div>
//         <div style={styles.blogDescription}>{blog.description}</div>

//         <div style={styles.likes} onClick={toggleLike}>
//           {liked ? '❤️ Liked' : '🤍 Like'} {likeCount}
//         </div>

//         <div style={styles.commentsSection}>
//           <h3>Comments</h3>
//           {comments.length === 0 ? (
//             <div>No comments yet.</div>
//           ) : (
//             comments.map((comment, index) => (
//               <div key={index} style={styles.comment}>
//                 <div style={styles.commentName}>{comment.name}</div>
//                 <div style={styles.commentText}>{comment.comment}</div>
//               </div>
//             ))
//           )}

//           <div style={styles.commentForm}>
//             <input
//               type="text"
//               placeholder="Your name"
//               style={styles.input}
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <textarea
//               placeholder="Write a comment..."
//               style={styles.textarea}
//               value={commentText}
//               onChange={(e) => setCommentText(e.target.value)}
//             ></textarea>
//             <button style={styles.button} onClick={handleCommentSubmit}>
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogDetails;


import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleBlogData } from '../actions/BlogAction';
import { useParams, useNavigate } from 'react-router-dom';
import { getCommentsByBlogId, addComment } from '../actions/CommentAction';
import { getLikeCount, addLike, removeLike } from '../actions/LikeAction';

// 👉 Social share components
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon
} from 'react-share';

const BlogDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const blog = useSelector(state => state.blog.single);
  const loading = useSelector(state => state.blog.loading);
  const comments = useSelector(state => state.comment.comments);
  const likeCount = useSelector(state => state.like.likeCount);

  const [liked, setLiked] = useState(false);
  const [name, setName] = useState('');
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    dispatch(getSingleBlogData(id));
    dispatch(getCommentsByBlogId(id));
    dispatch(getLikeCount(id));
  }, [dispatch, id]);

  const toggleLike = () => {
    if (liked) {
      dispatch(removeLike(id));
    } else {
      dispatch(addLike(id));
    }
    setLiked(!liked);
    setTimeout(() => {
      dispatch(getLikeCount(id));
    }, 300);
  };

  const handleCommentSubmit = () => {
    if (!name || !commentText) return alert('Please fill all fields');
    dispatch(addComment(id, { name, comment: commentText }));
    setName('');
    setCommentText('');
    setTimeout(() => {
      dispatch(getCommentsByBlogId(id));
    }, 500);
  };

  const handleNativeShare = () => {
    const shareUrl = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.description,
        url: shareUrl
      }).then(() => {
        console.log('Shared successfully');
      }).catch((error) => {
        console.error('Error sharing:', error);
      });
    } else {
      alert('Your browser does not support sharing. Please copy the URL: ' + shareUrl);
    }
  };

  const shareUrl = window.location.href;

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      color: '#333'
    },
    blogImg: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px'
    },
    blogTitle: {
      fontSize: '28px',
      fontWeight: 'bold',
      margin: '20px 0 10px'
    },
    blogDescription: {
      fontSize: '18px',
      lineHeight: '1.6',
      marginBottom: '20px'
    },
    likes: {
      fontSize: '16px',
      marginBottom: '20px',
      cursor: 'pointer'
    },
    shareButtons: {
      display: 'flex',
      gap: '10px',
      marginBottom: '30px'
    },
    commentsSection: {
      borderTop: '1px solid #ccc',
      paddingTop: '20px'
    },
    comment: {
      background: '#f9f9f9',
      padding: '10px',
      borderRadius: '5px',
      marginBottom: '15px'
    },
    commentName: {
      fontWeight: 'bold',
      marginBottom: '5px'
    },
    commentText: {
      fontSize: '15px'
    },
    commentForm: {
      marginTop: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '5px'
    },
    textarea: {
      padding: '10px',
      fontSize: '16px',
      height: '80px',
      border: '1px solid #ccc',
      borderRadius: '5px'
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      background: '#3498db',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginBottom: '10px'
    },
    floatingBack: {
      position: 'fixed',
      bottom: '40px',
      left: '40px',
      backgroundColor: '#3498db',
      color: '#fff',
      padding: '40px 16px',
      borderRadius: '50%',
      cursor: 'pointer',
      zIndex: 1000,
      boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
      border: 'none'
    }
  };

  if (loading || !blog) {
    return <div style={styles.container}>Loading...</div>;
  }

  return (
    <>
      <button style={styles.floatingBack} onClick={() => navigate('/')}>
        ← Go Back
      </button>

      <div style={styles.container}>
        <img src={blog.media_url} alt="Blog" style={styles.blogImg} />
        <div style={styles.blogTitle}>{blog.title}</div>
        <div style={styles.blogDescription}>{blog.description}</div>

        <div style={styles.likes} onClick={toggleLike}>
          {liked ? '❤️ Liked' : '🤍 Like'} {likeCount}
        </div>

        {/* Native share button */}
        <button style={styles.button} onClick={handleNativeShare}>📤 Share This Blog</button>

        {/* Optional social media share buttons */}
        <div style={styles.shareButtons}>
          <FacebookShareButton url={shareUrl} quote={blog.title}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <WhatsappShareButton url={shareUrl} title={blog.title}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          <TwitterShareButton url={shareUrl} title={blog.title}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>

        <div style={styles.commentsSection}>
          <h3>Comments</h3>
          {comments.length === 0 ? (
            <div>No comments yet.</div>
          ) : (
            comments.map((comment, index) => (
              <div key={index} style={styles.comment}>
                <div style={styles.commentName}>{comment.name}</div>
                <div style={styles.commentText}>{comment.comment}</div>
              </div>
            ))
          )}

          <div style={styles.commentForm}>
            <input
              type="text"
              placeholder="Your name"
              style={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              placeholder="Write a comment..."
              style={styles.textarea}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>
            <button style={styles.button} onClick={handleCommentSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;


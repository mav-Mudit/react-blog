import {useState} from "react"

 function CreatePost() {
  const[title,setTitle]=useState()
  const[content,setcontent]=useState()
  const[subTitle,setsubTitle]=useState()

  function handleSubmit(e){
    //when the form is submitted and the page doesn't get reloaded
    e.preventDefault()

    console.log('title: ',title)
    console.log('subtitle: ',subTitle)
    console.log('content: ',content)
  }
  return (
    <div className="create-post">
      <h1>Create Post</h1>


   <form onSubmit={handleSubmit}>
    <div className="form-field">
      <label>Title</label>
      <input value={title} onChange={(e)=>setTitle(e.target.value)}/>
    </div>


    <div className="form-field">
      <label>Sub Title</label>
      <input value={subTitle} onChange={(e)=>setsubTitle(e.target.value)}/>
    </div>


    <div className="form-field">
      <label>Content</label>
     <textarea value={content} onChange={(e)=>setcontent(e.target.value)}></textarea>
    </div>
    <button className="create-post-btn">Create Post</button>
   </form>
    </div>
  )
}
export default CreatePost;

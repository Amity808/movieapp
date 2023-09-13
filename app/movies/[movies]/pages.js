export default async function UserPage({ userId }) {
 
  
    // if(!user.name) return notFound()
    
    return (
      <>
        <h2>{user.name}</h2>
        <br />
        <Suspense fallback={<h2>Loading......</h2>}>
          <UserPosts promise={userPostData} />
        </Suspense>
      </>
    )
  }
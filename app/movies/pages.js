export default async function UsersPage() {
    

    

    const content = (
        <section>
            <h2>
                <Link href='/'>Back To Home</Link>
            </h2>
            <br />
            {users.map(user => {
                return (
                    <>
                        <p key={user.id}><Link href={`/users/${user.id}`}>{user.name}</Link></p>
                        <br />

                    </>
                )
            })}
        </section>
    )

  return content
}
 
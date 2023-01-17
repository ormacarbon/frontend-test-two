import { useEffect, useState } from "react";
import Service from '../../services/index'
import Image from "next/image";
import * as Styles from './styles';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';

const Content = () => {
  const [users, setUsers] = useState([]);
  // slice(0, 15)
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 15;
  const currentPage = pageNumber * usersPerPage;

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await Service.user.getAllUsers('');
      setUsers(data);
    }
    getUsers();
  }, [])

  const showUsers = users
    .slice(currentPage, currentPage + usersPerPage)
    .map((user) => {
      return (
        <Styles.UserCard key={user.id}>
          <Image
            src={user.avatar}
            width={100}
            height={100}
            alt="random user image"
            style={{
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

            }}
          />
          <p>
            {user.name}
          </p>
        </Styles.UserCard>
      )
    })

    // Function to round up the number and create another page to paginate correctly
    const pageCount = Math.ceil(users.length/usersPerPage);

    const changePage = ({ selected }) => {
      setPageNumber(selected);
    }

  return (
    <>
        {/* <Styles.SearchInputContainer>
          <input type="text" placeholder='Search for a user ...' onKeyUp={() => { console.log('slkfgjhsdfhj') }} />
        </Styles.SearchInputContainer> */}

      <Styles.ContentContainer>


        {showUsers}
        {/* {users.length === 0 ? (
          <div>Loading users...</div>
        ) : (
          users.map((user) => (
            <Styled.UserCard key={user.id}>
              <p>
                {user.name}
              </p>
              <Image src={user.avatar} width={100} height={100} alt="random user image" />
            </Styled.UserCard>
          ))
        )} */}
      </Styles.ContentContainer>
      <div>
        <Styles.Pagination
          previousLabel={<CgChevronLeft />}
          nextLabel={<CgChevronRight />}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'paginateBtn'}
          previousLinkClassName={'prevBtn'}
          nextLinkClassName={'nextBtn'}
          disabledClassName={'paginateDisabled'}
          activeClassName={'paginateActive'}
        />

      </div>
    </>
  )
}

export default Content;

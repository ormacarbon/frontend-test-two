import { useEffect, useState } from "react";
import Service from '../../services/index'
import Image from "next/image";
import * as Styles from './styles';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';

const Content = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [pageNumber, setPageNumber] = useState(2);

  const getUsers = async () => {
    const { data } = await Service.user.getAllUsers('');
    setUsers(data);
  }

  useEffect(() => {
    getUsers();
  }, [])

  const showUsers = users
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

    const changePage = async ({ selected }) => {
      selected += 1
      const { data } = await Service.user.getAllUsers(search, selected);
      setUsers(data);
    }

    const searchUser = async (event) => {
      const name = event.target.value
      const { data } = await Service.user.getAllUsers(name);
      setSearch(name)
      setUsers(data);
    }

  return (
    <>
        <Styles.SearchInputContainer>
          <input
            type="text"
            placeholder='Search for a user ...'
            onKeyUp={searchUser}
          />
        </Styles.SearchInputContainer>

      <Styles.ContentContainer>
        {showUsers}
      </Styles.ContentContainer>
      <div>
        <Styles.Pagination
          previousLabel={<CgChevronLeft />}
          nextLabel={<CgChevronRight />}
          pageCount={pageNumber}
          containerClassName={'paginateBtn'}
          previousLinkClassName={'prevBtn'}
          nextLinkClassName={'nextBtn'}
          disabledClassName={'paginateDisabled'}
          activeClassName={'paginateActive'}
          onPageChange={changePage}
        />

      </div>
    </>
  )
}

export default Content;

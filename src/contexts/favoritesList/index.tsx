import { toast } from 'react-toastify';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getData } from '@utils/tmdb';
import { MovieData } from '@pages/bm-play/home';

export type FavoriteItemProps = {
  id: number
  title: string
  release_date: string
  vote_average: number
};

type FavoritesListContext = {
  items: MovieData[];
  addItem: (id: number) => Promise<void>;
  deleteItem: (id: number) => void;
};

type ListProviderParams = {
  children: React.ReactNode;
}

const ListContext = createContext({} as FavoritesListContext);

function ListProvider({ children }: ListProviderParams): JSX.Element {
  const [items, setItems] = useState<MovieData[]>([]);
  const [itemAdded, setItemAdded] = useState<MovieData>();

  useEffect(() => {
    const itemsStorage = localStorage.getItem('user@listItems');

    if (itemsStorage) {
      const itemsSaved: MovieData[] = JSON.parse(itemsStorage);
      setItems(itemsSaved);
    }
  }, [itemAdded]);

  async function addItem(id: number): Promise<void> {
    const response = await getData({ endPoint: `/movie/${id}?` });
    setItemAdded(response)

    if (!response) {
      toast.info('Não temos dados do filme em nossa base de dados.', {
        autoClose: 3000,
      });
    }

    const produtAlreadyExists = items.find((item) => item.id === id);

    if(!produtAlreadyExists) {
      localStorage.setItem(
        'user@listItems',
        JSON.stringify([...items, response])
      );

      toast.success('Filme adicionado aos favoritos.', {
        autoClose: 3000,
      });
    }
  }

  function deleteItem(id: number): void {
    const itemDeleted = items.filter((item) => item.id !== id);

    setItems([...itemDeleted]);

    toast.info('Item deletado do carrinho', {
      autoClose: 3000,
    });

    localStorage.setItem('user@listItems', JSON.stringify(itemDeleted));

    setTimeout(() => window.location.reload(), 3000)
  }

  return (
    <ListContext.Provider value={{ items, addItem, deleteItem }}>
      {children}
    </ListContext.Provider>
  );
}

const useListContext = (): FavoritesListContext => {
  const context = useContext(ListContext);

  return context;
};


export { useListContext, ListProvider };
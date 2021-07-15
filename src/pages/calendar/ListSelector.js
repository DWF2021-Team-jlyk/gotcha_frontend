import React from 'react';

const ListSelector = ({lists, listId, setListId}) => {
    return(
        <div>
        {lists?.map((list,index) => (
          <>
            <input
              type='checkBox'
              key={index}
              value={list.list_id}
              name={list.list_name}
              onClick={async e => {
                const index = await listId.findIndex(value => value === list.list_id);
                if (index === -1) {
                  setListId(listId.concat(list.list_id));
                } else {
                  setListId(listId.filter(value => value !== list.list_id));
                }
              }}
            />
            &nbsp;{list.list_name} &nbsp;
          </>
        ))}
      </div>
    )
}

export default ListSelector;
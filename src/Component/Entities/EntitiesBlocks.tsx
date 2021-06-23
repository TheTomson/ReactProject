import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchPhoto } from "../../redux/Actions/photoActions";
import { IPhotoReducer } from "../../redux/Reducers/photoReducer";
import { IState } from "../../redux/Reducers/rootReducer";

const Wrapper5 = styled.div<{ active: boolean }>`
  width: 77%;
  margin-left: 18%;
  margin-top: 7px;
  align-items: center;
  justify-content: space-around;
  background-color: #edf2f7;
  position: relative;
  border: 1px solid;
  z-index: 3;
  display: flex;
  flex-direction: ${({ active }) => (active ? "row" : "column")};
  flex-wrap: wrap;
`;
const Posts = styled.div<{ active: boolean }>`
  display: flex;
  border: 0.1px solid;
  border-radius: 5px;
  height: auto;
  width: ${({ active }) => (active ? "20%" : "inherit")};
  background-color: white;
`;
const PostsImg = styled.img`
  height: 50px;
  width: 50px;
`;
const PostsTAndC = styled.div`
  display: flex;
  flex-direction: column;
`;
const PostsTitle = styled.span`
  position: relative;
  font-weight: bold;
  font-size: 20px;
  color: #6699ff;
  margin-bottom: 7px;
`;
const PostsContent = styled.p``;

type fetchPhoto = ReturnType<typeof fetchPhoto>;
export const EntitiesBlocks = (props: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<fetchPhoto>(fetchPhoto());
  }, []);
  const photos = useSelector<IState, IPhotoReducer>((state) => ({
    ...state.photo,
  }));
  return (
    <Wrapper5 active={props.mosaic}>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>ABC generic company</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>Sungrid</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>Mongrid</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>Yoring</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>Goring</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>Loring</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>Doring</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>Floring</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>Baringo</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>SunoGrido</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>ABC generic company</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>Sungrid</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>Mongrid</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>Yoring</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>Goring</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>Loring</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>Doring</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>Floring</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>Baringo</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>SunoGrido</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>ABC generic company</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>Sungrid</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>Mongrid</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>Yoring</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>Goring</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>Loring</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>Doring</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>Floring</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>Baringo</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>SunoGrido</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>SunoGrido</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
      <Posts active={props.mosaic}>
        <PostsImg
          src={photos.photo[Math.floor(Math.random() * 3000)]?.url}
        ></PostsImg>
        <PostsTAndC>
          <PostsTitle>SunoGrido</PostsTitle>
          <PostsContent>Carcas 1050, Districto Capital,Venezuela</PostsContent>
        </PostsTAndC>
      </Posts>
    </Wrapper5>
  );
};

import React from 'react'
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar"
import TagsList from "./TagsList";
import './Tags.css'
//import { tagsList } from "./tagList";

const Tags = () => {
    const tagsList = [{
        id:1,
        tagName: "javascript",
        tagDesc: "eiuh eh fuieh iufhie ufhiuwehfu iwhfiuh jhbsci iididsiv hikjdv jdsij vid  svnidnv jdsnvkjn sdvndsnv"
    },{
        id:2,
        tagName: "python",
        tagDesc: "eiuh eh fuieh iufhie ufhiuwehfu iwhfiuh jhbsci iididsiv hikjdv jdsij vid  svnidnv jdsnvkjn sdvndsnv"
    },{
        id:3,
        tagName: "c#",
        tagDesc: "eiuh eh fuieh iufhie ufhiuwehfu iwhfiuh jhbsci iididsiv hikjdv jdsij vid  svnidnv jdsnvkjn sdvndsnv"
    },{
        id:4,
        tagName: "java",
        tagDesc: "eiuh eh fuieh iufhie ufhiuwehfu iwhfiuh jhbsci iididsiv hikjdv jdsij vid  svnidnv jdsnvkjn sdvndsnv"
    },{
        id:5,
        tagName: "php",
        tagDesc: "eiuh eh fuieh iufhie ufhiuwehfu iwhfiuh jhbsci iididsiv hikjdv jdsij vid  svnidnv jdsnvkjn sdvndsnv"
    },{
        id:6,
        tagName: "html",
        tagDesc: "eiuh eh fuieh iufhie ufhiuwehfu iwhfiuh jhbsci iididsiv hikjdv jdsij vid  svnidnv jdsnvkjn sdvndsnv"
    },{
        id:7,
        tagName: "android",
        tagDesc: "eiuh eh fuieh iufhie ufhiuwehfu iwhfiuh jhbsci iididsiv hikjdv jdsij vid  svnidnv jdsnvkjn sdvndsnv"
    },{
        id:8,
        tagName: "css",
        tagDesc: "eiuh eh fuieh iufhie ufhiuwehfu iwhfiuh jhbsci iididsiv hikjdv jdsij vid  svnidnv jdsnvkjn sdvndsnv"
    },{
        id:9,
        tagName: "reactjs",
        tagDesc: "eiuh eh fuieh iufhie ufhiuwehfu iwhfiuh jhbsci iididsiv hikjdv jdsij vid  svnidnv jdsnvkjn sdvndsnv"
    },{
        id:10,
        tagName: "nodejs",
        tagDesc: "eiuh eh fuieh iufhie ufhiuwehfu iwhfiuh jhbsci iididsiv hikjdv jdsij vid  svnidnv jdsnvkjn sdvndsnv"
    }
    ]
  return (
    <div className='home-container-1'>
        <LeftSidebar />
        <div className='home-container-2'>
            <h1 className='tags-h1'>Tags</h1>
            <p className='tags-p'>A tag is a keyword or label that categorizes your question with other,
          similar questions.</p>
            <p className='tags-p'>Using the right tags makes it easier for others to find and answer
          your question.</p>
            <div className='tags-list-container'>
                {tagsList.map((tag) => (
                    <TagsList tag={tag} key={tagsList.id} />
                ))}

            </div>

        </div>
        
    </div>
  )
}

export default Tags
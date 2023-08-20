import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;


    function clickHandler() {
        //logic for clicking button
        if (likedCourses.includes(course.id)) {
            // setLikedCourses(likedCourses.filter(id => id !== course.id));
            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Like Removed");
        }
        else {
            // phle se like nahi hai ye course
            // insert krna hai ye course liked course me
            if (likedCourses.length === 0) {
                setLikedCourses([course.id])
            }
            else {
                // non empty phle se
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Like Added");
        }
    }

    return (
        <div className="w-[300px] bg-bgDark bg-opacity-70 rounded-md overflow-hidden">
            <div className=" relative ">
                <img src={course.image.url} alt="" />

                <div className=" w-[40px] h-[40px] absolute bg-white rounded-full grid place-items-center right-2 bottom-[-1rem]">
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ?
                                (<FcLike fontSize="1.75rem" />)
                                : (<FcLikePlaceholder fontSize="1.75rem" />)
                        }
                    </button>
                </div>
            </div>

            <div className="p-4">
                <p className=" text-white font-bold leading-6 text-lg "> {course.title} </p>
                <p className=" text-white mt-2 leading-normal ">
                    {
                        course.description.length > 100 ?
                            (course.description.substr(0, 100)) + "..." :
                            (course.description)
                    }
                </p>
            </div>
        </div>
    )
}

export default Card;

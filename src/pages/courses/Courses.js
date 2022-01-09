import "./courses.css";

export default function Courses({courses}) {
    return (
        <div className="courses">
            <h1 ref={courses}>OUR COURSES</h1>
            <div className="cours">
                <img src="/images/lap1.png" />
                <img src="/images/lap2.png" />
                <img src="/images/lap3.png" />
                <img src="/images/lap4.png" />
                <img src="/images/lap5.png" />
                <img src="/images/lap6.png" />
            </div>
        </div>
    )
}
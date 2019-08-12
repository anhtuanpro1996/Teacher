import React from 'react'

export default function CourseElement(){
	return(
		<div className="course-element">
			<div className="course-image">
				<img alt="Nguyên lý kế toán - Làm chủ tình hình tài chính" src="https://static.edumall.vn/uploads/images/courses/nguyen-ly-ke-toan.jpg" />
			</div>
			<div className="box-text">
				<p className="title">
          Thành thạo Tiếng Anh trong 30 ngày cho người mới trong 30 ngày cho người mới
				</p>
				<p className="teacher-code">
          Anhnt.01
				</p>
			</div>
			<div className="close-button">
				<img alt="close" src="/images/icon/closeimg.png" />
			</div>
		</div>
	)
}
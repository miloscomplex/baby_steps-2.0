class StudentsController < ApplicationController

    def index
        students = Student.all
        render json: students
    end

    def show
        student = Student.find(params[:id])
        render json: student
    end

    def create
        student = Student.new(student_params)
        if student.save
            render json: author
        else
            render json: { error: "Unable to create student" }, status: 400
        end
    end

    def update
        student = Student.find(params[:id])
        if student 
            student.update(student_params)
            render json: student, status: 200
        else
            render json: { error: "unable to update student" }, status: 400
        end
    end

    def destroy 
        student = Student.find(params[:id])
        if student
            student.destroy
            render json: student, status: 200
        else
            render json: { error: "Unable to delete student" }, status: 400
        end
    end

    def student_params
        params.permit(:firstname, :lastname, :birthdate, :arrival, :user_id)
    end

end

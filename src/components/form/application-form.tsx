"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { RightArrowSeven } from "../svg";
import ErrMsg from "../err-msg";

type Inputs = {
  studentName: string;
  dateOfBirth: string;
  gender: string;
  currentSchool: string;
  gradeApplied: string;
  fatherName: string;
  fatherOccupation: string;
  fatherContact: string;
  motherName: string;
  motherOccupation: string;
  motherContact: string;
  correspondenceEmail: string;
  localAddress: string;
  heardFrom?: string[];
};

const heardOptions = [
  "Friends / Relatives / Siblings",
  "Social Media",
  "Online News Portals",
  "TV",
  "Newspaper",
  "Others",
];

const gradeOptions = [
  "Progressive Wings ",
  "Primary School",
  "Middle School",
  "High School",
  "Senior High School",
];

export default function ApplicationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  const brandColor = "#0079C0";

  return (
    <>
      <style>{`
        #contact-form .btn-check:checked + .btn {
          background-color: ${brandColor} !important;
          border-color: ${brandColor} !important;
          color: white !important;
        }
        #contact-form .btn:hover {
          background-color: ${brandColor} !important;
          border-color: ${brandColor} !important;
          color: white !important;
        }
        #contact-form .form-control:focus,
        #contact-form .form-select:focus,
        #contact-form textarea:focus {
          border-color: ${brandColor} !important;
          box-shadow: none !important;
          outline: none !important;
        }
        #contact-form .form-control:focus-visible,
        #contact-form .form-select:focus-visible,
        #contact-form textarea:focus-visible {
          border-color: ${brandColor} !important;
          box-shadow: none !important;
          outline: 1px solid ${brandColor} !important;
          outline-offset: -1px !important;
        }
      `}</style>
      <form
        id="contact-form"
        onSubmit={handleSubmit(onSubmit)}
        className="container-fluid px-0"
      >
        {/* Single Card with All Form Fields */}
        <div
          className="card rounded-3 mb-4"
          style={{
            border: `1px solid ${brandColor}`,
            boxShadow: `0 0.125rem 0.25rem rgba(0, 121, 192, 0.15), 0 0.5rem 1rem rgba(0, 121, 192, 0.15)`,
          }}
        >
          <div
            className="card-header text-white py-3"
            style={{ backgroundColor: brandColor }}
          >
            <div className="d-flex align-items-center">
              <i className="fas fa-file-alt me-2 fs-5"></i>
              <div>
                <h5 className="mb-0 fw-bold text-light text-uppercase">
                  Application Form
                </h5>
                <small className="opacity-75">
                  Please fill in all the required information
                </small>
              </div>
            </div>
          </div>
          <div className="card-body p-4">
            {/* Student Information */}
            <div className="mb-5">
              <h6
                className="fw-bold mb-3 d-flex align-items-center"
                style={{ color: brandColor }}
              >
                <i className="fas fa-user-graduate me-2"></i>
                Student Information
              </h6>
              <div className="row g-3">
                <div className="col-md-8">
                  <label className="form-label fw-semibold">
                    Full Name of the Student{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light">
                      <i
                        className="fas fa-user"
                        style={{ color: brandColor }}
                      ></i>
                    </span>
                    <input
                      type="text"
                      className={`form-control form-control-lg ${errors.studentName ? "is-invalid" : ""}`}
                      placeholder="Student's full name"
                      {...register("studentName", {
                        required: "Student name is required",
                      })}
                    />
                  </div>
                  {errors.studentName?.message && (
                    <ErrMsg msg={errors.studentName.message} />
                  )}
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-semibold">
                    Date of Birth <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light">
                      <i
                        className="fas fa-calendar-alt"
                        style={{ color: brandColor }}
                      ></i>
                    </span>
                    <input
                      type="date"
                      className={`form-control ${errors.dateOfBirth ? "is-invalid" : ""}`}
                      style={{ fontSize: "1.1rem" }}
                      {...register("dateOfBirth", {
                        required: "Date of birth is required",
                      })}
                    />
                  </div>
                  {errors.dateOfBirth?.message && (
                    <ErrMsg msg={errors.dateOfBirth.message} />
                  )}
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-semibold d-block">
                    Gender <span className="text-danger">*</span>
                  </label>
                  <div className="btn-group w-100" role="group">
                    {["male", "female", "other"].map((value) => (
                      <React.Fragment key={value}>
                        <input
                          type="radio"
                          className="btn-check"
                          id={`gender-${value}`}
                          value={value}
                          {...register("gender", {
                            required: "Gender is required",
                          })}
                        />
                        <label
                          className="btn"
                          htmlFor={`gender-${value}`}
                          style={{
                            borderColor: brandColor,
                            color: brandColor,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = brandColor;
                            e.currentTarget.style.color = "white";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                            e.currentTarget.style.color = brandColor;
                          }}
                        >
                          <i
                            className={`fas fa-${value === "male" ? "mars" : value === "female" ? "venus" : "genderless"} me-1`}
                          ></i>
                          {value.charAt(0).toUpperCase() + value.slice(1)}
                        </label>
                      </React.Fragment>
                    ))}
                  </div>
                  {errors.gender?.message && (
                    <ErrMsg msg={errors.gender.message} />
                  )}
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-semibold">
                    Grade / Level applied for LFES{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light">
                      <i
                        className="fas fa-graduation-cap"
                        style={{ color: brandColor }}
                      ></i>
                    </span>
                    <select
                      className={`form-select ${errors.gradeApplied ? "is-invalid" : ""}`}
                      style={{ fontSize: "1.1rem" }}
                      {...register("gradeApplied", {
                        required: "Grade / Level is required",
                      })}
                    >
                      <option value="">Select grade / level</option>
                      {gradeOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.gradeApplied?.message && (
                    <ErrMsg msg={errors.gradeApplied.message} />
                  )}
                </div>

                <div className="col-md-12">
                  <label className="form-label fw-semibold">
                    Current School where the Student is enrolled in{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light">
                      <i
                        className="fas fa-school"
                        style={{ color: brandColor }}
                      ></i>
                    </span>
                    <input
                      type="text"
                      className={`form-control form-control-lg ${errors.currentSchool ? "is-invalid" : ""}`}
                      placeholder="School name, address, district, country"
                      {...register("currentSchool", {
                        required: "Current school is required",
                      })}
                    />
                  </div>
                  {errors.currentSchool?.message && (
                    <ErrMsg msg={errors.currentSchool.message} />
                  )}
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-4" />

            {/* Parents Details */}
            <div className="mb-5">
              <h6
                className="fw-bold mb-3 d-flex align-items-center"
                style={{ color: brandColor }}
              >
                <i className="fas fa-users me-2"></i>
                Parents Details
              </h6>
              <div className="row g-3">
                <div className="col-md-4">
                  <label className="form-label fw-semibold">
                    Full name of Father <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light">
                      <i
                        className="fas fa-user"
                        style={{ color: brandColor }}
                      ></i>
                    </span>
                    <input
                      type="text"
                      className={`form-control form-control-lg ${errors.fatherName ? "is-invalid" : ""}`}
                      placeholder="Father's full name"
                      {...register("fatherName", {
                        required: "Father's name is required",
                      })}
                    />
                  </div>
                  {errors.fatherName?.message && (
                    <ErrMsg msg={errors.fatherName.message} />
                  )}
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-semibold">
                    Occupation of Father <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light">
                      <i
                        className="fas fa-briefcase"
                        style={{ color: brandColor }}
                      ></i>
                    </span>
                    <input
                      type="text"
                      className={`form-control form-control-lg ${errors.fatherOccupation ? "is-invalid" : ""}`}
                      placeholder="Occupation"
                      {...register("fatherOccupation", {
                        required: "Occupation is required",
                      })}
                    />
                  </div>
                  {errors.fatherOccupation?.message && (
                    <ErrMsg msg={errors.fatherOccupation.message} />
                  )}
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-semibold">
                    Contact number of Father{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light">
                      <i
                        className="fas fa-phone"
                        style={{ color: brandColor }}
                      ></i>
                    </span>
                    <input
                      type="text"
                      className={`form-control form-control-lg ${errors.fatherContact ? "is-invalid" : ""}`}
                      placeholder="Phone number"
                      {...register("fatherContact", {
                        required: "Contact is required",
                      })}
                    />
                  </div>
                  {errors.fatherContact?.message && (
                    <ErrMsg msg={errors.fatherContact.message} />
                  )}
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-semibold">
                    Full name of Mother <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light">
                      <i
                        className="fas fa-user"
                        style={{ color: brandColor }}
                      ></i>
                    </span>
                    <input
                      type="text"
                      className={`form-control form-control-lg ${errors.motherName ? "is-invalid" : ""}`}
                      placeholder="Mother's full name"
                      {...register("motherName", {
                        required: "Mother's name is required",
                      })}
                    />
                  </div>
                  {errors.motherName?.message && (
                    <ErrMsg msg={errors.motherName.message} />
                  )}
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-semibold">
                    Occupation of Mother <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light">
                      <i
                        className="fas fa-briefcase"
                        style={{ color: brandColor }}
                      ></i>
                    </span>
                    <input
                      type="text"
                      className={`form-control form-control-lg ${errors.motherOccupation ? "is-invalid" : ""}`}
                      placeholder="Occupation"
                      {...register("motherOccupation", {
                        required: "Occupation is required",
                      })}
                    />
                  </div>
                  {errors.motherOccupation?.message && (
                    <ErrMsg msg={errors.motherOccupation.message} />
                  )}
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-semibold">
                    Contact number of Mother{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light">
                      <i
                        className="fas fa-phone"
                        style={{ color: brandColor }}
                      ></i>
                    </span>
                    <input
                      type="text"
                      className={`form-control form-control-lg ${errors.motherContact ? "is-invalid" : ""}`}
                      placeholder="Phone number"
                      {...register("motherContact", {
                        required: "Contact is required",
                      })}
                    />
                  </div>
                  {errors.motherContact?.message && (
                    <ErrMsg msg={errors.motherContact.message} />
                  )}
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-4" />

            {/* Contact & Address */}
            <div className="mb-5">
              <h6
                className="fw-bold mb-3 d-flex align-items-center"
                style={{ color: brandColor }}
              >
                <i className="fas fa-address-card me-2"></i>
                Contact & Address
              </h6>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Email for correspondence{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light">
                      <i
                        className="fas fa-envelope"
                        style={{ color: brandColor }}
                      ></i>
                    </span>
                    <input
                      type="email"
                      className={`form-control form-control-lg ${errors.correspondenceEmail ? "is-invalid" : ""}`}
                      placeholder="Email address"
                      {...register("correspondenceEmail", {
                        required: "Email for correspondence is required",
                      })}
                    />
                  </div>
                  {errors.correspondenceEmail?.message && (
                    <ErrMsg msg={errors.correspondenceEmail.message} />
                  )}
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Local Address
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light align-items-start pt-3">
                      <i
                        className="fas fa-map-marker-alt"
                        style={{ color: brandColor }}
                      ></i>
                    </span>
                    <textarea
                      className="form-control form-control-lg"
                      rows={3}
                      placeholder="Street, Area, District, Country"
                      {...register("localAddress")}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-4" />

            {/* Reference */}
            <div>
              <h6
                className="fw-bold mb-3 d-flex align-items-center"
                style={{ color: brandColor }}
              >
                <i className="fas fa-info-circle me-2"></i>
                How did you come to know about LFES?
              </h6>
              <div className="row g-3">
                {heardOptions.map((label, index) => (
                  <div key={label} className="col-md-6 col-lg-4">
                    <div className="form-check form-check-lg p-3 border rounded">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`heardFrom-${index}`}
                        value={label}
                        {...register("heardFrom")}
                        style={{ accentColor: brandColor }}
                      />
                      <label
                        className="form-check-label fw-semibold"
                        htmlFor={`heardFrom-${index}`}
                      >
                        {label}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="d-flex justify-content-center mb-4">
          <button
            type="submit"
            className="btn btn-md px-5 py-2 text-uppercase shadow text-white"
            style={{
              minWidth: "150px",
              backgroundColor: brandColor,
              borderColor: brandColor,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#005a8f";
              e.currentTarget.style.borderColor = "#005a8f";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = brandColor;
              e.currentTarget.style.borderColor = brandColor;
            }}
          >
            <i className="fas fa-paper-plane me-2"></i>
            Submit Application
            <span className="ms-2">
              <RightArrowSeven />
            </span>
          </button>
        </div>
      </form>
    </>
  );
}

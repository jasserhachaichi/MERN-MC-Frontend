import React, { useState, useEffect, useRef, } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';



function Clientview() {
    const { userId } = useParams();
    const navigate = useNavigate();
    //console.log(userId);
    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);
    const btnRef4 = useRef(null);
    const btnRef7 = useRef(null);
    const btnRef8 = useRef(null);
    const btnRef9 = useRef(null);
    const btnRef10 = useRef(null);


    const btnRef11 = useRef(null);
    const btnRef12 = useRef(null);

    const btnRef13 = useRef(null);
    const btnRef14 = useRef(null);

    const btnRef15 = useRef(null);
    const btnRef16 = useRef(null);

    const btnRef17 = useRef(null);
    const btnRef18 = useRef(null);

    const btnRef19 = useRef(null);
    const btnRef20 = useRef(null);

    const btnRef21 = useRef(null);
    const btnRef22 = useRef(null);

    const btnRef23 = useRef(null);
    const btnRef24 = useRef(null);

    const [imagePreview, setImagePreview] = useState('/assets/media/svg/files/blank-image.svg');
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);
    const [FName, setFName] = useState('');
    const [LName, setLName] = useState('');




    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  // Form email update
    const { 
        register: registerForm1, 
        handleSubmit: handleSubmitForm1, 
        watch: watchForm1, 
        reset: resetForm1, 
        formState: { errors: errorsForm1 } 
      } = useForm();
  // Form password update
  const { 
    register: registerForm2, 
    handleSubmit: handleSubmitForm2, 
    watch: watchForm2, 
    reset: resetForm2, 
    formState: { errors: errorsForm2 } 
  } = useForm();

    // Form role update
    const { 
        register: registerForm3, 
        handleSubmit: handleSubmitForm3, 
        watch: watchForm3, 
        reset: resetForm3, 
        formState: { errors: errorsForm3 } 
      } = useForm();

    // Form user details
    const { 
        register: registerForm4, 
        handleSubmit: handleSubmitForm4, 
        watch: watchForm4, 
        reset: resetForm4, 
        formState: { errors: errorsForm4 } 
      } = useForm();
      const {
        register: registerFirstName,
        handleSubmit: handleSubmitFirstName,
        reset: resetFormF, 
        formState: { errors: errorsFirstName },
      } = useForm();
    
      const {
        register: registerLastName,
        handleSubmit: handleSubmitLastName,
        reset: resetFormL, 
        formState: { errors: errorsLastName },
      } = useForm();

      const {
        register: registerAddress1,
        handleSubmit: handleSubmitAddress1,
        reset: resetFormAddress1, 
        formState: { errors: errorsAddress1 },
      } = useForm();

      const {
        register: registerAddress2,
        handleSubmit: handleSubmitAddress2,
        reset: resetFormAddress2, 
        formState: { errors: errorsAddress2 },
      } = useForm();

      const {
        register: registerPhone,
        handleSubmit: handleSubmitPhone,
        reset: resetFormPhone, 
        formState: { errors: errorsPhone },
      } = useForm();

      const {
        register: registerTown,
        handleSubmit: handleSubmitTown,
        reset: resetFormTown, 
        formState: { errors: errorsTown },
      } = useForm();

      const {
        register: registerState,
        handleSubmit: handleSubmitState,
        reset: resetFormState, 
        formState: { errors: errorsState },
      } = useForm();

      const {
        register: registerPostCode,
        handleSubmit: handleSubmitPostCode,
        reset: resetFormPostCode, 
        formState: { errors: errorsPostCode },
      } = useForm();

      const {
        register: registerCountry,
        handleSubmit: handleSubmitCountry,
        reset: resetFormCountry, 
        formState: { errors: errorsCountry },
      } = useForm();

    
    const new_password = watchForm2('new_password');

    const [passwordStrength, setPasswordStrength] = useState(0);
  
    const checkPasswordStrength = (password) => {
      let nbverif = 0;
      if (password.length >= 8) nbverif += 1;
      if (/[a-zA-Z]/.test(password)) nbverif += 1;
      if (/\d/.test(password)) nbverif += 1;
      if (/[@!%*?&]/.test(password)) nbverif += 1;
      setPasswordStrength(nbverif);
    };


    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/client/${userId}`,{withCredentials: true});
                setUser(response.data.user);
                setImagePreview( response.data.user.image || response.data.user.imageUrl || '/assets/images/Default-profile.jpg');
                setFName(response.data.user.firstName);
                setLName(response.data.user.lastName);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchUser();
    }, [userId]);

    const onSubmitEmail = async (data) => {
        try {
            btnRef1.current.style.display = 'none';
            btnRef2.current.style.display = 'inline-block';

            const response = await axios.put(`http://localhost:4000/api/user/${userId}/email`, { email: data.email }, { withCredentials: true });
            Swal.fire('Updated!', response.data.message, 'success');
            resetForm1();
            btnRef1.current.style.display = 'inline-block';
            btnRef2.current.style.display = 'none';
        } catch (error) {
            Swal.fire('Error!', error.response?.data?.message || 'There was an error updating the email.', 'error');
            btnRef1.current.style.display = 'inline-block';
            btnRef2.current.style.display = 'none';
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    const handleDelete = async (userId) => {
        const result = await Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
        });
    
        if (result.isConfirmed) {
          try {
            await axios.delete(`http://localhost:4000/api/deletestaff/${userId}`, { withCredentials: true });
            Swal.fire('Deleted!', 'User has been deleted.', 'success');
            navigate('/admin/users');
          } catch (error) {
            console.error('Error deleting user:', error);
            Swal.fire('Error!', 'There was an error deleting the user.', 'error');
          }
        }
    };

    const onSubmitPassword = async (data) => {
/*         console.log(data);
        console.log("jasser"); */
        if (data.new_password !== data.confirm_password) {
            Swal.fire('Error!', 'Passwords do not match.', 'error');
            return;
        } 

        try {
            btnRef3.current.style.display = 'none';
            btnRef4.current.style.display = 'inline-block';

            const response = await axios.put(`http://localhost:4000/api/user/${userId}/password`, {
                current_password: data.current_password,
                new_password: data.new_password,
                confirm_password: data.confirm_password
            }, { withCredentials: true });

            Swal.fire('Updated!', response.data.message, 'success');
            watchForm2();
            checkPasswordStrength('');
            btnRef3.current.style.display = 'inline-block';
            btnRef4.current.style.display = 'none';
        } catch (error) {
            Swal.fire('Error!', error.response?.data?.message || 'There was an error updating the password.', 'error');
            btnRef3.current.style.display = 'inline-block';
            btnRef4.current.style.display = 'none';
        }
    };
    const handleImageRemove = () => {
        setImagePreview('/assets/media/svg/files/blank-image.svg');
        setSelectedFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };



const onSubmitIMG = async (data) => {
    btnRef7.current.style.display = 'none';
    btnRef8.current.style.display = 'inline-block';
    try {
      const formData = new FormData();

/*       if(data.firstName && data.firstName !='' && data.firstName != user.firstName){
        formData.append('firstName', data.firstName);
      }
      if(data.lastName && data.lastName !='' && data.lastName != user.lastName){
        formData.append('lastName', data.lastName);
      } */

      if (selectedFile) {
        formData.append('avatar', selectedFile);
      }

      const response = await axios.put(`http://localhost:4000/api/user/img/${userId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });

      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'User details updated successfully!',
      });
      setUser(response.data.user);
      
      // Reset form and states
      resetForm4();
      //setImagePreview('/assets/media/svg/files/blank-image.svg');
      setSelectedFile(null);

    } catch (error) {
      console.error('Error updating user details:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'There was an error updating the user details.',
      });
    }

    btnRef7.current.style.display = 'inline-block';
    btnRef8.current.style.display = 'none';
  };

  const onSubmitFirstName = data => {
    btnRef9.current.style.display = 'none';
    btnRef10.current.style.display = 'inline-block';

    axios.put(`http://localhost:4000/api/user/${userId}/firstname`, { firstName: data.firstName })
      .then(response => {
        setUser(response.data.user);
        setFName(response.data.user.firstName);
        setSelectedFile(null);
        resetFormF();
        Swal.fire('Success', 'First name updated successfully', 'success');
      })
      .catch(error => Swal.fire('Error', 'Error updating first name', 'error'));
      btnRef10.current.style.display = 'none';
      btnRef9.current.style.display = 'inline-block';
  };

  const onSubmitLastName = data => {
    axios.put(`http://localhost:4000/api/user/${userId}/lastname`, { lastName: data.lastName })
      .then(response => {
        setUser(response.data.user);
        setLName(response.data.user.lastName);
        setSelectedFile(null);
        resetFormL();
        Swal.fire('Success', 'Last name updated successfully', 'success');
      })
      .catch(error => Swal.fire('Error', 'Error updating last name', 'error'));
  };













  const onSubmitAddress1 = async (data) => {
    btnRef11.current.style.display = 'none';
    btnRef12.current.style.display = 'inline-block';
    try {
        const response = await axios.put(`http://localhost:4000/api/user/${userId}/address1`, { address1: data.address1 });
        setUser(response.data.user);
        resetFormAddress1();
        Swal.fire('Success', 'Address 1 updated successfully', 'success');
    } catch (error) {
        Swal.fire('Error', error.response?.data?.message || 'There was an error updating Address 1.', 'error');
    }
    btnRef12.current.style.display = 'none';
    btnRef11.current.style.display = 'inline-block';
};

const onSubmitAddress2 = async (data) => {
    btnRef13.current.style.display = 'none';
    btnRef14.current.style.display = 'inline-block';
    try {
        const response = await axios.put(`http://localhost:4000/api/user/${userId}/address2`, { address2: data.address2 });
        setUser(response.data.user);
        resetFormAddress2();
        Swal.fire('Success', 'Address 2 updated successfully', 'success');
    } catch (error) {
        Swal.fire('Error', error.response?.data?.message || 'There was an error updating Address 2.', 'error');
    }
    btnRef14.current.style.display = 'none';
    btnRef13.current.style.display = 'inline-block';
};

const onSubmitPhone = async (data) => {
    btnRef15.current.style.display = 'none';
    btnRef16.current.style.display = 'inline-block';
    try {
        const response = await axios.put(`http://localhost:4000/api/user/${userId}/phone`, { phone: data.Phone });
        setUser(response.data.user);
        resetFormPhone();
        Swal.fire('Success', 'Phone updated successfully', 'success');
    } catch (error) {
        Swal.fire('Error', error.response?.data?.message || 'There was an error updating the phone.', 'error');
    }
    btnRef16.current.style.display = 'none';
    btnRef15.current.style.display = 'inline-block';
};

const onSubmitTown = async (data) => {
    btnRef17.current.style.display = 'none';
    btnRef18.current.style.display = 'inline-block';
    try {
        const response = await axios.put(`http://localhost:4000/api/user/${userId}/town`, { town: data.Town });
        setUser(response.data.user);
        resetFormTown();
        Swal.fire('Success', 'Town updated successfully', 'success');
    } catch (error) {
        Swal.fire('Error', error.response?.data?.message || 'There was an error updating the town.', 'error');
    }
    btnRef18.current.style.display = 'none';
    btnRef17.current.style.display = 'inline-block';
};

const onSubmitState = async (data) => {
    btnRef19.current.style.display = 'none';
    btnRef20.current.style.display = 'inline-block';
    try {
        const response = await axios.put(`http://localhost:4000/api/user/${userId}/state`, { state: data.State });
        setUser(response.data.user);
        resetFormState();
        Swal.fire('Success', 'State/Province updated successfully', 'success');
    } catch (error) {
        Swal.fire('Error', error.response?.data?.message || 'There was an error updating the state.', 'error');
    }
    btnRef20.current.style.display = 'none';
    btnRef19.current.style.display = 'inline-block';
};

const onSubmitPostCode = async (data) => {
    btnRef21.current.style.display = 'none';
    btnRef22.current.style.display = 'inline-block';
    try {
        const response = await axios.put(`http://localhost:4000/api/user/${userId}/postcode`, { postcode: data.PostCode });
        setUser(response.data.user);
        resetFormPostCode();
        Swal.fire('Success', 'Post Code updated successfully', 'success');
    } catch (error) {
        Swal.fire('Error', error.response?.data?.message || 'There was an error updating the post code.', 'error');
    }
    btnRef22.current.style.display = 'none';
    btnRef21.current.style.display = 'inline-block';
};

const onSubmitCountry = async (data) => {
    btnRef23.current.style.display = 'none';
    btnRef24.current.style.display = 'inline-block';
    try {
        const response = await axios.put(`http://localhost:4000/api/user/${userId}/country`, { country: data.Country });
        setUser(response.data.user);
        resetFormCountry();
        Swal.fire('Success', 'Country updated successfully', 'success');
    } catch (error) {
        Swal.fire('Error', error.response?.data?.message || 'There was an error updating the country.', 'error');
    }
    btnRef24.current.style.display = 'none';
    btnRef23.current.style.display = 'inline-block';
};



    return (
        <>
            <div className="d-flex flex-column flex-lg-row">

                <div className="flex-column flex-lg-row-auto w-lg-250px w-xl-350px mb-10">


                    <div className="card mb-5 mb-xl-8">

                        <div className="card-body">




                            <div className="d-flex flex-center flex-column py-5">

                                <div className="symbol symbol-100px symbol-circle mb-7">

                                    <img src={user.image || user.imageUrl || '/assets/images/Default-profile.jpg'}  alt="image" />

                                </div>



                                <a href="#" className="fs-3 text-gray-800 text-hover-primary fw-bold mb-3">{user.firstName} {user.lastName !== "its$fromgoogle" ? user.lastName : ""}</a>



                                <div className="mb-9">

                                    <div className="badge badge-lg badge-light-primary d-inline text-capitalize">{user.role}</div>

                                </div>

                            </div>

                            <hr />


                            <div className="d-flex flex-stack fs-4 py-3">
                                <div className="fw-bold rotate collapsible" data-bs-toggle="collapse"
                                    href="#kt_user_view_details" role="button" aria-expanded="false"
                                    aria-controls="kt_user_view_details">
                                    Details
                                    <span className="ms-2 rotate-180">
                                        <i className="ki-duotone ki-down fs-3"></i> </span>
                                </div>

                                <span data-bs-toggle="tooltip" data-bs-trigger="hover"
                                    title="Edit customer details">
                                    <a href="#" className="btn btn-sm btn-light-primary" data-bs-toggle="modal"
                                        data-bs-target="#kt_modal_update_details">
                                        Edit Image
                                    </a>
                                </span>
                            </div>


                            <div className="separator"></div>


                            <div id="kt_user_view_details" className="collapse show">
                                <div className="pb-5 fs-6">

                                    <div className="fw-bold mt-5">Account ID</div>
                                    <div className="text-gray-600">ID-{user._id}</div>


                                    <div className="fw-bold mt-5">Email</div>
                                    <div className="text-gray-600"><a href="#"
                                        className="text-gray-600 text-hover-primary">{user.email}</a>
                                    </div>

                                    <div className="fw-bold mt-5">Address 1</div>
                                    <div className="text-gray-600">{user.addr1 ? user.addr1 : '-'}</div>

                                    <div className="fw-bold mt-5">Address 2</div>
                                    <div className="text-gray-600">{user.addr2 ? user.addr2: '-'}</div>


                                    <div className="fw-bold mt-5">Phone</div>
                                    <div className="text-gray-600">{user.phone ?user.phone : '-'}</div>

                                    <div className="fw-bold mt-5">Town</div>
                                    <div className="text-gray-600">{user.town ?user.town : '-'}</div>

                                    <div className="fw-bold mt-5">State / Province</div>
                                    <div className="text-gray-600">{user.sp ?user.sp : '-'}</div>

                                    <div className="fw-bold mt-5">Post Code</div>
                                    <div className="text-gray-600">{user.postCode ?user.postCode : '-'}</div>

                                    <div className="fw-bold mt-5">Country</div>
                                    <div className="text-gray-600">{user.country ?user.country : '-'}</div>





                                </div>
                            </div>

                        </div>

                    </div>

                </div>



                <div className="flex-lg-row-fluid ms-lg-15">

                    <ul
                        className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-8">


                        <li className="nav-item">
                            <a className="nav-link text-active-primary pb-4 active"
                                data-bs-toggle="tab" href="#kt_user_view_overview_security">General</a>
                        </li>




                        <li className="nav-item ms-auto">

                            <a href="#" className={`btn btn-primary ps-7 menu-dropdown ${isDropdownVisible ? 'show' : ''}`} onClick={toggleDropdown} data-kt-menu-trigger="click"
                                data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                Actions
                                <i className="ki-duotone ki-down fs-2 me-0"></i> </a>

                            <div className={`menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold py-4 w-250px fs-6 ${isDropdownVisible ? 'show' : ''}`}
                                data-kt-menu="true" style={{position: "absolute", inset: "0px 0px auto auto", margin: 0, transform: "translate3d(-30.4px, 165.6px, 0px)"}}>

                                <div className="menu-item px-5">
                                    <a  onClick={() => handleDelete(user._id)} className="menu-link text-danger px-5">
                                        Delete Client
                                    </a>
                                </div>

                            </div>


                        </li>

                    </ul>



                    <div className="tab-content" id="myTabContent">


                        <div className="tab-pane fade show active" id="kt_user_view_overview_security" role="tabpanel">

                            <div className="card pt-4 mb-6 mb-xl-9">

                                <div className="card-header border-0">

                                    <div className="card-title">
                                        <h2>Profile</h2>
                                    </div>

                                </div>



                                <div className="card-body pt-0 pb-5">

                                    <div className="table-responsive">

                                        <table className="table align-middle table-row-dashed gy-5"
                                            id="kt_table_users_login_session">
                                            <tbody className="fs-6 fw-semibold text-gray-600">



                                                <tr>
                                                <td>First Name</td>
                                                <td>{user.firstName ?user.firstName : '-'}</td>
                                                <td className="text-end">
                                                    <button type="button"
                                                        className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#updateFirstNameModal">
                                                        <i className="ki-duotone ki-pencil fs-3"><span
                                                            className="path1"></span><span
                                                                className="path2"></span></i> </button>
                                                </td>
                                                </tr>

                                            <tr>
                                            <td>Last Name</td>
                                            <td>{user.lastName !== "its$fromgoogle" ? user.lastName : '-'}</td>
                                            <td className="text-end">
                                                <button type="button"
                                                    className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#updateLastNameModal">
                                                    <i className="ki-duotone ki-pencil fs-3"><span
                                                        className="path1"></span><span
                                                            className="path2"></span></i> </button>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td>Email</td>
                                            <td>{user.email ?user.email : '-'}</td>
                                            <td className="text-end">
                                                <button type="button"
                                                    className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#kt_modal_update_email">
                                                    <i className="ki-duotone ki-pencil fs-3"><span
                                                        className="path1"></span><span
                                                            className="path2"></span></i> </button>
                                            </td>
                                        </tr>
                                                <tr>
                                                    <td>Password</td>
                                                    <td>**********</td>
                                                    <td className="text-end">
                                                        <button type="button"
                                                            className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#kt_modal_update_password">
                                                            <i className="ki-duotone ki-pencil fs-3"><span
                                                                className="path1"></span><span
                                                                    className="path2"></span></i> </button>
                                                    </td>
                                                </tr>




                                                <tr>
                                                <td>Address 1</td>
                                                <td>{user.addr1 ? user.addr1: '-'}</td>
                                                <td className="text-end">
                                                    <button type="button"
                                                        className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#updateAddress1Modal">
                                                        <i className="ki-duotone ki-pencil fs-3"><span
                                                            className="path1"></span><span
                                                                className="path2"></span></i> </button>
                                                </td>
                                            </tr>



                                            <tr>
                                            <td>Address 2</td>
                                            <td>{user.addr2 ? user.addr2: '-'}</td>
                                            <td className="text-end">
                                                <button type="button"
                                                    className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#updateAddress2Modal">
                                                    <i className="ki-duotone ki-pencil fs-3"><span
                                                        className="path1"></span><span
                                                            className="path2"></span></i> </button>
                                            </td>
                                        </tr>


                                        
                                        <tr>
                                        <td>Phone</td>
                                        <td>{user.phone ? user.phone: '-'}</td>
                                        <td className="text-end">
                                            <button type="button"
                                                className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                                                data-bs-toggle="modal"
                                                data-bs-target="#updatePhoneModal">
                                                <i className="ki-duotone ki-pencil fs-3"><span
                                                    className="path1"></span><span
                                                        className="path2"></span></i> </button>
                                        </td>
                                    </tr>


                                    <tr>
                                    <td>Town</td>
                                    <td>{user.town ?user.town : '-'}</td>
                                    <td className="text-end">
                                        <button type="button"
                                            className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                                            data-bs-toggle="modal"
                                            data-bs-target="#updateTownModal">
                                            <i className="ki-duotone ki-pencil fs-3"><span
                                                className="path1"></span><span
                                                    className="path2"></span></i> </button>
                                    </td>
                                </tr>

                                <tr>
                                    <td>State</td>
                                    <td>{user.sp ?user.sp : '-'}</td>
                                    <td className="text-end">
                                        <button type="button"
                                            className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                                            data-bs-toggle="modal"
                                            data-bs-target="#updateStateModal">
                                            <i className="ki-duotone ki-pencil fs-3"><span
                                                className="path1"></span><span
                                                    className="path2"></span></i> </button>
                                    </td>
                                </tr>

                                
                                <tr>
                                    <td>Post Code</td>
                                    <td>{user.postCode ? user.postCode: '-'}</td>
                                    <td className="text-end">
                                        <button type="button"
                                            className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                                            data-bs-toggle="modal"
                                            data-bs-target="#updatePostCodeModal">
                                            <i className="ki-duotone ki-pencil fs-3"><span
                                                className="path1"></span><span
                                                    className="path2"></span></i> </button>
                                    </td>
                                </tr>

                                <tr>
                                <td>Country</td>
                                <td>{user.country ?user.country : '-'}</td>
                                <td className="text-end">
                                    <button type="button"
                                        className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                                        data-bs-toggle="modal"
                                        data-bs-target="#updateCountryModal">
                                        <i className="ki-duotone ki-pencil fs-3"><span
                                            className="path1"></span><span
                                                className="path2"></span></i> </button>
                                </td>
                            </tr>

                                            </tbody>
                                        </table>

                                    </div>

                                </div>

                            </div>



                        </div>


                    </div>

                </div>

            </div>

            <div className="modal fade" id="kt_modal_update_details" tabIndex="-1" aria-hidden="true">
    
                <div className="modal-dialog modal-dialog-centered mw-350px">
                    
                    <div className="modal-content">
                        
                        <form className="form"  id="kt_modal_update_user_form" onSubmit={handleSubmitForm4(onSubmitIMG)}>
                        
                            <div className="modal-header" id="kt_modal_update_user_header">
                                
                                <h2 className="fw-bold">Update Avatar</h2>
                                <button 
                                    type="button" 
                                    className="btn btn-icon btn-sm btn-active-icon-primary" 
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >
                                <i className="ki-duotone ki-cross fs-1">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                            </button>
                                
                            </div>
                            
                            
                            <div className="modal-body py-10 px-lg-17 d-flex justify-content-center">
                                
                                <div className="d-flex flex-column scroll-y me-n7 pe-7"
                                    id="kt_modal_update_user_scroll" data-kt-scroll="true"
                                    data-kt-scroll-activate="{default: false, lg: true}"
                                    data-kt-scroll-max-height="auto"
                                    data-kt-scroll-dependencies="#kt_modal_update_user_header"
                                    data-kt-scroll-wrappers="#kt_modal_update_user_scroll"
                                    data-kt-scroll-offset="300px">

                                    <div className="mb-7">

                                    

                                    
                                        <div>

                                            

                                            
                                            
                                            <div className="image-input image-input-outline image-input-placeholder"
                                                data-kt-image-input="true">
                                                
                                                <div className="image-input-wrapper w-125px h-125px"
                                                    style={{ backgroundImage: `url(${imagePreview})` }}>
                                                </div>
                                                

                                                
                                                <label
                                                    className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                    data-kt-image-input-action="change"
                                                    data-bs-toggle="tooltip" title="Change avatar">
                                                    <i className="ki-duotone ki-pencil fs-7"><span
                                                            className="path1"></span><span
                                                            className="path2"></span></i>
                                                    
                                                    <input type="file" name="avatar" accept=".png, .jpg, .jpeg" onChange={handleFileChange} ref={fileInputRef} />
                                                    <input type="hidden" name="avatar_remove" />
                                                    
                                                </label>
                                                

                                                
                                                <span
                                                    className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                    data-kt-image-input-action="cancel"
                                                    data-bs-toggle="tooltip" title="Cancel avatar" onClick={handleImageRemove}>
                                                    <i className="ki-duotone ki-cross fs-2"><span
                                                            className="path1"></span><span
                                                            className="path2"></span></i> </span>
                                                

                                                
                                                <span
                                                    className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                    data-kt-image-input-action="remove"
                                                    data-bs-toggle="tooltip" title="Remove avatar" onClick={handleImageRemove}>
                                                    <i className="ki-duotone ki-cross fs-2"><span
                                                            className="path1"></span><span
                                                            className="path2"></span></i> </span>
                                                
                                            </div>
                                            
                                        </div>
                                    
                                    </div>
                                    



                                    

                                    

                                    
                                
                                </div>
                            
                            </div>
                            
                            <div className="modal-footer flex-center">
                                <button type="submit" className="btn btn-primary" >
                                    <span ref={btnRef7} className="indicator-label">
                                        Submit
                                    </span>
                                    <span ref={btnRef8} className="indicator-progress">
                                        Please wait... <span
                                            className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                    </span>
                                </button>
                                
                            </div>
                            
                        </form>
                        
                    </div>
                </div>
            </div>

            <div className="modal fade" id="kt_modal_update_email" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered mw-650px">
                    <div className="modal-content">
                        <div className="modal-header">
                            
                            <h2 className="fw-bold">Update Email Address</h2>
                            

                            
                            <button 
                            type="button" 
                            className="btn btn-icon btn-sm btn-active-icon-primary" 
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <i className="ki-duotone ki-cross fs-1">
                                <span className="path1"></span>
                                <span className="path2"></span>
                            </i>
                        </button>
                            
                        </div>
                        

                        
                        <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                            
                            <form id="kt_modal_update_email_form" className="form"  onSubmit={handleSubmitForm1(onSubmitEmail)}>
                                

                                
                                <div
                                    className="notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6">
                                    
                                    <i className="ki-duotone ki-information fs-2tx text-primary me-4"><span
                                            className="path1"></span><span className="path2"></span><span
                                            className="path3"></span></i> 

                                    
                                    <div className="d-flex flex-stack flex-grow-1 ">
                                        
                                        <div className=" fw-semibold">

                                            <div className="fs-6 text-gray-700 ">Please note that a valid email
                                                address is required to complete the email verification.
                                            </div>
                                        </div>
                                        

                                    </div>
                                    
                                </div>
                                
                                

                                
                                <div className="fv-row mb-7">
                                    
                                    <label className="fs-6 fw-semibold form-label mb-2">
                                        <span className="required">Email Address</span>
                                    </label>

                                    <input
                                    className="form-control "
                                    type="email"
                                    placeholder="example@domain.com"
                                    {...registerForm1('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email format' } })}
                                    />
                                    {errorsForm1.email && <p className="text-danger">{errorsForm1.email.message}</p>}
       
                                </div>
                                

                                
                                <div className="text-center pt-15">

                                    <button type="reset" onClick={()=> {resetForm1()}} className="btn btn-light me-3" >
                                    Discard
                                </button>

                                    <button type="submit" className="btn btn-primary" >
                                        <span ref={btnRef1} className="indicator-label" >
                                            Submit
                                        </span>
                                        <span ref={btnRef2} className="indicator-progress">
                                            Please wait... <span
                                                className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                        </span>
                                    </button>
                                </div>
                                
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="kt_modal_update_password" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered mw-650px">
                        <div className="modal-content">
                            <div className="modal-header">
                                
                                <h2 className="fw-bold">Update Password</h2>
                                <button 
                                type="button" 
                                className="btn btn-icon btn-sm btn-active-icon-primary" 
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ki-duotone ki-cross fs-1">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                            </button>
                                
                            </div>
                            <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                                
                                <form id="kt_modal_update_password_form" className="form" noValidate onSubmit={handleSubmitForm2(onSubmitPassword)}>

                                    
                                    <div className="fv-row mb-10">
                                        <label className="required form-label fs-6 mb-2">Current Password</label>
                                        <input className="form-control form-control-lg " type="password" placeholder="" 
                                        {...registerForm2('current_password', { required: 'Current password is required' })} autoComplete="off" />
                                        {errorsForm2.current_password && <p className="text-danger">{errorsForm2.current_password.message}</p>}
                                    </div>
                                    

                                    
                                    <div className="mb-10 fv-row" data-kt-password-meter="true">
                                        
                                        <div className="mb-1">
                                            
                                            <label className="form-label fw-semibold fs-6 mb-2">
                                                New Password
                                            </label>
                                            

                                            
                                            <div className="position-relative mb-3">
                                            <input className="form-control form-control-lg " type="password" placeholder="" 
                                            {...registerForm2('new_password', {
                                                required: 'New password is required',
                                                pattern: {
                                                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*?&])[A-Za-z\d@!%*?&]{8,}$/,
                                                    message: 'Use 8 or more characters with a mix of letters, numbers & symbols except $'
                                                }
                                            })} autoComplete="off" onChange={(e) => checkPasswordStrength(e.target.value)} />
                                        {errorsForm2.new_password && <p className="text-danger">{errorsForm2.new_password.message}</p>}

                                                <span
                                                    className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
                                                    data-kt-password-meter-control="visibility">
                                                    <i className="ki-duotone ki-eye-slash fs-1"><span
                                                            className="path1"></span><span
                                                            className="path2"></span><span
                                                            className="path3"></span><span className="path4"></span></i>
                                                    <i className="ki-duotone ki-eye d-none fs-1"><span
                                                            className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span></i>
                                                </span>
                                            </div>
                                            

                                            
                                            <div className="d-flex align-items-center mb-3" >
                                                <div className={`flex-grow-1 rounded h-5px me-2 bg-secondary bg-active-success  ${passwordStrength > 0 ? 'active' : ''}`}></div>
                                                <div className={`flex-grow-1 rounded h-5px me-2 bg-secondary bg-active-success  ${passwordStrength > 1 ? ' active' : ''}`}></div>
                                                <div className={`flex-grow-1 rounded h-5px me-2 bg-secondary bg-active-success  ${passwordStrength > 2 ? 'active' : ''}`}></div>
                                                <div className={`flex-grow-1 rounded h-5px bg-secondary bg-active-success  ${passwordStrength > 3 ? 'active' : ''}`}></div>
                                            </div>
                                            
                                        </div>
                                        

                                    
                                        <div className="text-muted">
                                            Use 8 or more characters with a mix of letters, numbers & symbols.
                                        </div>
                                        
                                    </div>
                                    

                                    
                                    <div className="fv-row mb-10">
                                        <label className="form-label fw-semibold fs-6 mb-2">Confirm New
                                            Password</label>

                                <input className="form-control form-control-lg " type="password" placeholder="" 
                                    {...registerForm2('confirm_password', {
                                        required: 'Confirm new password is required',
                                        validate: value => value === new_password || 'Passwords do not match'
                                    })} autoComplete="off" />
                                {errorsForm2.confirm_password && <p className="text-danger">{errorsForm2.confirm_password.message}</p>}


                                    </div>
                                    

                                    
                                    <div className="text-center pt-15">
                                        <button type="reset" className="btn btn-light me-3" onClick={()=> {resetForm2();checkPasswordStrength('');}}>
                                            Discard
                                        </button>

                                        <button type="submit" className="btn btn-primary">
                                            <span ref={btnRef3} className="indicator-label">
                                                Submit
                                            </span>
                                            <span ref={btnRef4} className="indicator-progress">
                                                Please wait... <span
                                                    className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                            </span>
                                        </button>
                                    </div>
                                    
                                </form>
                                
                            </div>
                        </div>
                    </div>
            </div>


            <div className="modal fade" id="updateFirstNameModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Update First Name</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmitFirstName(onSubmitFirstName)}>
                    <div className="mb-3">
                      <label htmlFor="firstName" className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        {...registerFirstName('firstName', { required: 'First name is required' })}
                      />
                      {errorsFirstName.firstName && <p className="text-danger">{errorsFirstName.firstName.message}</p>}
                    </div>


                    <div className="text-center pt-15">
                        <button type="submit" className="btn btn-primary">
                            <span ref={btnRef9} className="indicator-label">
                            Update
                            </span>
                            <span ref={btnRef10} className="indicator-progress">
                                Please wait... <span
                                    className="spinner-border spinner-border-sm align-middle ms-2"></span>
                            </span>
                        </button>
                </div>








                  </form>
                </div>
              </div>
            </div>
          </div>
    

          <div className="modal fade" id="updateLastNameModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Update Last Name</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmitLastName(onSubmitLastName)}>
                    <div className="mb-3">
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        {...registerLastName('lastName', { required: 'Last name is required' })}
                      />
                      {errorsLastName.lastName && <p className="text-danger">{errorsLastName.lastName.message}</p>}
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                  </form>
                </div>
              </div>
            </div>
          </div>


          <div className="modal fade" id="updateAddress1Modal" tabIndex="-1" aria-hidden="true">
<div className="modal-dialog modal-dialog-centered">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title">Update Address1</h5>
      <button 
      type="button" 
      className="btn btn-icon btn-sm btn-active-icon-primary" 
      data-bs-dismiss="modal"
      aria-label="Close"
  >
      <i className="ki-duotone ki-cross fs-1">
          <span className="path1"></span>
          <span className="path2"></span>
      </i>
  </button>
    </div>
    <div className="modal-body">
      <form onSubmit={handleSubmitAddress1(onSubmitAddress1)}>
        <div className="mb-3">
          <label htmlFor="Address1" className="form-label">Address1</label>
          <input
            type="text"
            className="form-control"
            id="Address1"
            {...registerAddress1('address1', { required: 'Address1 is required' })}
          />
          {errorsAddress1.address1 && <p className="text-danger">{errorsAddress1.address1.message}</p>}
        </div>
        <div className="text-center pt-15">
        <button type="submit" className="btn btn-primary">
            <span ref={btnRef11} className="indicator-label">
            Update
            </span>
            <span ref={btnRef12} className="indicator-progress">
                Please wait... <span
                    className="spinner-border spinner-border-sm align-middle ms-2"></span>
            </span>
        </button>
</div>
      </form>
    </div>
  </div>
</div>
           </div>


           <div className="modal fade" id="updateAddress2Modal" tabIndex="-1" aria-hidden="true">
           <div className="modal-dialog modal-dialog-centered">
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">Update Address2</h5>
                 <button 
                 type="button" 
                 className="btn btn-icon btn-sm btn-active-icon-primary" 
                 data-bs-dismiss="modal"
                 aria-label="Close"
             >
                 <i className="ki-duotone ki-cross fs-1">
                     <span className="path1"></span>
                     <span className="path2"></span>
                 </i>
             </button>
               </div>
               <div className="modal-body">
                 <form onSubmit={handleSubmitAddress2(onSubmitAddress2)}>
                   <div className="mb-3">
                     <label htmlFor="Address2" className="form-label">Address2</label>
                     <input
                       type="text"
                       className="form-control"
                       id="Address2"
                       {...registerAddress2('address2', { required: 'Address2 is required' })}
                     />
                     {errorsAddress2.address2 && <p className="text-danger">{errorsAddress2.address2.message}</p>}
                   </div>
                   <div className="text-center pt-15">
                   <button type="submit" className="btn btn-primary">
                       <span ref={btnRef13} className="indicator-label">
                       Update
                       </span>
                       <span ref={btnRef14} className="indicator-progress">
                           Please wait... <span
                               className="spinner-border spinner-border-sm align-middle ms-2"></span>
                       </span>
                   </button>
           </div>
                 </form>
               </div>
             </div>
           </div>
           </div>

           <div className="modal fade" id="updatePhoneModal" tabIndex="-1" aria-hidden="true">
<div className="modal-dialog modal-dialog-centered">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title">Update Phone</h5>
      <button 
      type="button" 
      className="btn btn-icon btn-sm btn-active-icon-primary" 
      data-bs-dismiss="modal"
      aria-label="Close"
  >
      <i className="ki-duotone ki-cross fs-1">
          <span className="path1"></span>
          <span className="path2"></span>
      </i>
  </button>
    </div>
    <div className="modal-body">
      <form onSubmit={handleSubmitPhone(onSubmitPhone)}>
        <div className="mb-3">
          <label htmlFor="Phone" className="form-label">Phone</label>
          <input
            type="number" min={0}
            className="form-control"
            id="Phone"
            {...registerPhone('Phone', { required: 'Phone is required' })}
          />
          {errorsPhone.Phone && <p className="text-danger">{errorsPhone.Phone.message}</p>}
        </div>
        <div className="text-center pt-15">
        <button type="submit" className="btn btn-primary">
            <span ref={btnRef15} className="indicator-label">
            Update
            </span>
            <span ref={btnRef16} className="indicator-progress">
                Please wait... <span
                    className="spinner-border spinner-border-sm align-middle ms-2"></span>
            </span>
        </button>
</div>
      </form>
    </div>
  </div>
</div>
           </div>


           <div className="modal fade" id="updateTownModal" tabIndex="-1" aria-hidden="true">
<div className="modal-dialog modal-dialog-centered">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title">Update Town</h5>
      <button 
      type="button" 
      className="btn btn-icon btn-sm btn-active-icon-primary" 
      data-bs-dismiss="modal"
      aria-label="Close"
  >
      <i className="ki-duotone ki-cross fs-1">
          <span className="path1"></span>
          <span className="path2"></span>
      </i>
  </button>
    </div>
    <div className="modal-body">
      <form onSubmit={handleSubmitTown(onSubmitTown)}>
        <div className="mb-3">
          <label htmlFor="Town" className="form-label">Town</label>
          <input
            type="text"
            className="form-control"
            id="Town"
            {...registerTown('Town', { required: 'Town is required' })}
          />
          {errorsTown.Town && <p className="text-danger">{errorsTown.Town.message}</p>}
        </div>
        <div className="text-center pt-15">
        <button type="submit" className="btn btn-primary">
            <span ref={btnRef17} className="indicator-label">
            Update
            </span>
            <span ref={btnRef18} className="indicator-progress">
                Please wait... <span
                    className="spinner-border spinner-border-sm align-middle ms-2"></span>
            </span>
        </button>
</div>
      </form>
    </div>
  </div>
</div>
           </div>


           <div className="modal fade" id="updateStateModal" tabIndex="-1" aria-hidden="true">
           <div className="modal-dialog modal-dialog-centered">
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">Update State</h5>
                 <button 
                 type="button" 
                 className="btn btn-icon btn-sm btn-active-icon-primary" 
                 data-bs-dismiss="modal"
                 aria-label="Close"
             >
                 <i className="ki-duotone ki-cross fs-1">
                     <span className="path1"></span>
                     <span className="path2"></span>
                 </i>
             </button>
               </div>
               <div className="modal-body">
                 <form onSubmit={handleSubmitState(onSubmitState)}>
                   <div className="mb-3">
                     <label htmlFor="State" className="form-label">State</label>
                     <input
                       type="text"
                       className="form-control"
                       id="State"
                       {...registerState('State', { required: 'State is required' })}
                     />
                     {errorsState.State && <p className="text-danger">{errorsState.State.message}</p>}
                   </div>
                   <div className="text-center pt-15">
                   <button type="submit" className="btn btn-primary">
                       <span ref={btnRef19} className="indicator-label">
                       Update
                       </span>
                       <span ref={btnRef20} className="indicator-progress">
                           Please wait... <span
                               className="spinner-border spinner-border-sm align-middle ms-2"></span>
                       </span>
                   </button>
           </div>
                 </form>
               </div>
             </div>
           </div>
                      </div>

            
            <div className="modal fade" id="updatePostCodeModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title">Update Post Code</h5>
                <button 
                type="button" 
                className="btn btn-icon btn-sm btn-active-icon-primary" 
                data-bs-dismiss="modal"
                aria-label="Close"
            >
                <i className="ki-duotone ki-cross fs-1">
                    <span className="path1"></span>
                    <span className="path2"></span>
                </i>
            </button>
                </div>
                <div className="modal-body">
                <form onSubmit={handleSubmitPostCode(onSubmitPostCode)}>
                    <div className="mb-3">
                    <label htmlFor="PostCode" className="form-label">Post Code</label>
                    <input
                        type="number"
                        min={0}
                        className="form-control"
                        id="PostCode"
                        {...registerPostCode('PostCode', { required: 'Post Code is required' })}
                    />
                    {errorsPostCode.PostCode && <p className="text-danger">{errorsPostCode.PostCode.message}</p>}
                    </div>
                    <div className="text-center pt-15">
                    <button type="submit" className="btn btn-primary">
                        <span ref={btnRef21} className="indicator-label">
                        Update
                        </span>
                        <span ref={btnRef22} className="indicator-progress">
                            Please wait... <span
                                className="spinner-border spinner-border-sm align-middle ms-2"></span>
                        </span>
                    </button>
            </div>
                </form>
                </div>
            </div>
            </div>
            </div>


            <div className="modal fade" id="updateCountryModal" tabIndex="-1" aria-hidden="true">
<div className="modal-dialog modal-dialog-centered">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title">Update Country</h5>
      <button 
      type="button" 
      className="btn btn-icon btn-sm btn-active-icon-primary" 
      data-bs-dismiss="modal"
      aria-label="Close"
  >
      <i className="ki-duotone ki-cross fs-1">
          <span className="path1"></span>
          <span className="path2"></span>
      </i>
  </button>
    </div>
    <div className="modal-body">
      <form onSubmit={handleSubmitCountry(onSubmitCountry)}>
        <div className="mb-3">
          <label htmlFor="Country" className="form-label">Country</label>
          <input
            type="text"
            className="form-control"
            id="Country"
            {...registerCountry('Country', { required: 'Country is required' })}
          />
          {errorsCountry.Country && <p className="text-danger">{errorsCountry.Country.message}</p>}
        </div>


        
        <div className="text-center pt-15">
        <button type="submit" className="btn btn-primary">
            <span ref={btnRef23} className="indicator-label">
            Update
            </span>
            <span ref={btnRef24} className="indicator-progress">
                Please wait... <span
                    className="spinner-border spinner-border-sm align-middle ms-2"></span>
            </span>
        </button>
</div>
      </form>
    </div>
  </div>
</div>
           </div>



        </>
    )
}

export default Clientview;
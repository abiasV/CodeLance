# CodeLance

DevLance is a web platform designed to connect employers with skilled freelancers for project collaboration.

# Live Website: 

### Deploy on Vercel: https://codelance-mern-front-jd6mapdm3-abbas-projects-d1e5aa36.vercel.app/
![live website](./frontend/public/asset/CodeLance-Frontend.png)

# Demo

When we click on one of the links on the main page (image above), we are redirected to the "auth" page, which is the login page. In this project, I have used the Twilio API to send and validate one-time password(OTP) via SMS to a specified mobile number, you can use the Twilio API. You should first verify a number that you own to use it as the 'To' number for outbound messages from the Sandbox Number.
![Verify Phone Number](./frontend/public/asset/35.png)

- Sign Up for Twilio:

    Go to Twilio and create an account.
    Get your Twilio Account SID, Auth Token, and a Twilio phone number.

- Install Twilio SDK:
    Install the Twilio Node.js package by running:
```
npm install twilio
```

Enter your Phone Number:
![Enter your Phone Number](./frontend/public/asset/1.png)

A toast message confirms that the one-time password has been sent to the entered mobile number. After entering it, click Verify. Be aware that if it takes more than 90 seconds, the sent code will expire, and you will need to click the Resend OTP link that appears after 90 seconds instead of the countdown timer. <br>
![Verify Phone Number](./frontend/public/asset/2.png)

Displaying the addition of a user in MongoDB <br>
![add user in MongoDB](./frontend/public/asset/3.png)

After 90 seconds, I entered the code and encountered an error message stating that the code has expired. As instructed, I clicked on the "Re-send OTP" link, received the new code, and entered it.<br>
![Expiration code](./frontend/public/asset/4.png)

After entering a valid code, you will be redirected to the next page where you need to enter your name, email, and role (either freelancer or owner).<br>
![More information](./frontend/public/asset/5.png)

At this stage, the value of isVerifiedPhoneNumber in the database changes from false to true, but isActive remains false until the user provides more complete information along with their role on this website and as you can see in the picture, until the role is determined, I have considered everyone's role as "USER" by default.<br>
![Verify Phone Number](./frontend/public/asset/6.png)

After entering your details and role, click on "Verify User"<br>
![Verify Phone Number](./frontend/public/asset/7.png)

As you can see, Now your information has been completed successfully but your profile is pendig approval. Now, we need to wait for the admin to log into their user panel and approve the user in the relevant section. <br>
![Header](./frontend/public/asset/8.png)

In the image below, you can see the database up to this stage where after role determination, isActive changes from false to true, the role changes from USER to FREELANCER, and the fields email and name are also added. However, until the admin approves the user, its status remains at the default value of 1. In this database, 1 signifies Pending Approval, 0 signifies Rejected, and 2 signifies Approved. <br>
![Verify Phone Number](./frontend/public/asset/9.png)

Here, the user Fahimeh logs into her admin panel. You see the statistics page displaying the number of users, projects, and proposals. <br>
![Verify Phone Number](./frontend/public/asset/10.png)

Enter the users section, find the user who has recently joined the site, and click on "Change Status". <br>
![Header](./frontend/public/asset/11.png)

Here, after clicking on "Change Status" and styling with a modal popup, a window appears. By clicking on the cross (close) symbol or clicking anywhere outside the box, you can close the window and cancel the operation. Alternatively, by selecting one of the three status options, you can specify the user's status. <br>
<h6>I have written this custom hook for the backdrop and used it in various contexts such as clicking on edit, delete, or changing proposal status.</h6>

![Verify Phone Number](./frontend/public/asset/12.png)

The status of the new user (Abbas) has been changed to "approved".
![Verify Phone Number](./frontend/public/asset/13.png)

In the Projects section, the admin has access to view all projects created by all owners. <br>
![Header](./frontend/public/asset/14.png)

In the Proposals section, The admin has access to view all Proposals created by all Freelancer. <br>
![Verify Phone Number](./frontend/public/asset/15.png)

Once the user approved by the admin, whose status in the database has changed from 1 to 2 indicating approval, logs in again, they are greeted with a welcome message and gain access to their dashboard as a freelancer. << In the displayed message, I should change the old name "FreelanceHub" to the new name "CodeLance". >> <br>
![Verify Phone Number](./frontend/public/asset/16.png)

In the Projects section the Freelancer has access to view all projects created by all employers. <br>
![Header](./frontend/public/asset/17.png)

The freelancer can only see the proposals that they themselves have proposed in their proposals section, along with the status of each proposal. (whether the Owner has approved it or not) <br>
![Verify Phone Number](./frontend/public/asset/18.png)

Now we want to log in to the website with owner access and see the permissions an owner has. The owner can see a brief summary of their statistics, including the number of projects, the number of assigned projects, and the number of proposals that freelancers have proposed for their projects. <br>
![Verify Phone Number](./frontend/public/asset/19.png)

In the Projects section, each Owner can only see the projects they have created, unlike the admin and freelancers who can see all projects. Here, the Owner can create a new project, edit, or delete a project. The Owner can change the status of a project to open or close and can also view the proposals for each of their projects.
![Header](./frontend/public/asset/20.png)

The owner can add a new project by clicking on Add Project.
![Verify Phone Number](./frontend/public/asset/21.png)

When you click on Delete Project, a project deletion confirmation window opens as a backdrop. By clicking on Delete, the project is removed.
![Verify Phone Number](./frontend/public/asset/22.png)

By clicking on one of the proposals for a project that has not been assigned, we want to check if any requests have been submitted for this project.
![Header](./frontend/public/asset/23.png)

Here we see that two freelancers have submitted proposals for this project. Their status is set to "Pending Approval" by default. The owner needs to review these proposals and approve one based on their requirements.
![Verify Phone Number](./frontend/public/asset/24.png)

After making a decision and selecting one of the proposals, the owner clicks on the "Change Status" link for the chosen proposal. As with previous similar actions, the owner selects one of the available options.
![Verify Phone Number](./frontend/public/asset/25.png)


![Header](./frontend/public/asset/26.png)

![Verify Phone Number](./frontend/public/asset/27.png)

![Verify Phone Number](./frontend/public/asset/28.png)

![Header](./frontend/public/asset/29.png)

![Verify Phone Number](./frontend/public/asset/30.png)

![Verify Phone Number](./frontend/public/asset/31.png)

![Header](./frontend/public/asset/32.png)

![Verify Phone Number](./frontend/public/asset/33.png)

![Verify Phone Number](./frontend/public/asset/34.png)


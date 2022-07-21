# Proxima Assessment


## Setting up and running the app (_locally_):

- Use `git clone https://github.com/ajeurkar/proxima-assessment.git` to clone the repository.
- Use `npm install` for installing the dependencies.
- Use `ng build` for compiling the application .
- Use `ng serve` for running the development server.


##  Problem statement:

### Create a `To-Do Task App` using `Angular Material` and `NGX Datatable`.
1. The application needs to have the following elements:
    `Header`, `Sidenav`, `Footer`, and a container where you are using NGX Datatable to display the To-Do list.
2. The To-Do list needs to have the following functionality:
3. Add, Inline-Edit, and Delete a Task.
    - Adding a task should be done via a Dialog Popup where it accepts a Title and Description.
    - Editing a task should be done inline on the table itself with a save button per row.
    - Deleting a task should show a confirmation dialog. When the user clicks a delete button on the dialog, the dialog should close and the component that called the dialog should implement the logic for deleting the task.
    - The data can live locally and does not require an API.
    - The ability to search the list of tasks, case insensitive and it searches both the title and description.

Wireframe for Reference only

![Screenshot 2022-07-13 at 12-54-21 Figma](https://user-images.githubusercontent.com/56335654/178675579-c4580dd9-d019-41d4-a8b8-a5453815f009.png)

4. Create a separate layout where each task is in its own box, that is spaced evenly.
    - Each row should have 3 boxes.
    - Each box should stretch the maximum size of the width of its columns that is permitted.
    - Each box should have the same height as the boxes in the same row.
    - Each box should have a different background color based on a predetermined list of colors.

Wireframe for Reference only

![Screenshot from 2022-07-21 23-37-39](https://user-images.githubusercontent.com/52557440/180283970-02ce64f1-8b0a-43f1-8cc6-8a08ecef599c.png)

### _Please note that this exam is measuring your UI skill level as well as attention to detail when building a UI. We're looking for a clean user interface with a proper user experience._





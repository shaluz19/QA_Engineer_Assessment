import { expect, Locator, Page } from '@playwright/test';

export class TodoPage {

    readonly page: Page;

    readonly email: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly addTaskButton: Locator;
    readonly taskName: Locator;
    readonly taskDescription: Locator;
    readonly saveTaskButton: Locator;
    readonly closePopupButton: Locator;
    readonly editButton: Locator;
    readonly taskNameTextbox: Locator;
    readonly taskDescriptionTextbox: Locator;
    readonly updateTaskButton: Locator;
    readonly closeTaskButton: Locator;
    readonly deleteMenuItem: Locator;
    readonly confirmDeleteButton: Locator;
    readonly taskNameButton: Locator;
    readonly moreMenuButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.email = page.getByRole('textbox', { name: 'Email' });

        this.password = page.getByRole('textbox', { name: 'Password' });

        this.loginButton = page.getByRole('button', { name: 'Log in' });

        // Task Locators

        this.addTaskButton = page
            .getByTestId('project-list-view')
            .getByRole('button', { name: 'Add task' });

        this.taskName = page.getByRole('textbox', {
            name: 'Task name'
        });

        this.taskNameButton = page.getByRole('button', {
            name: 'Task name'
        });

        this.taskDescription = page.getByRole('textbox', {
            name: 'Description'
        });

        this.saveTaskButton =
            page.getByTestId('task-editor-submit-button');

        this.closePopupButton = page.getByRole('button', {
            name: "I'll check later"
        });

        this.editButton = page.getByRole('button', { name: 'Edit' });

        this.taskNameTextbox = page.getByRole('textbox', {
            name: 'Task name'
        });

        this.taskDescriptionTextbox = page.getByRole('textbox', {
            name: 'Description'
        });

        this.updateTaskButton = page.getByTestId('task-editor-submit-button');

        this.closeTaskButton = page.getByRole('button', {
            name: 'Close task'
        });

        this.deleteMenuItem = page.getByRole('menuitem', {
            name: /delete/i
        });

        this.moreMenuButton = page.getByRole('button', {
            name: 'More actions'
        });
        this.confirmDeleteButton = page.getByRole('button', {
            name: /^Delete$/
        });
    }

    async login(email: string, password: string) {

        await this.page.goto('/auth/login');

        await this.email.fill(email);

        await this.password.fill(password);

        await this.loginButton.click();

        // Wait until Inbox page loads
        await this.page.waitForURL('**/app/inbox', {
            timeout: 20000
        });

        // Wait for the left navigation to appear
        await expect(
            this.page.getByTestId('project-list-view')
        ).toBeVisible({
            timeout: 10000
        });

        // Close popup if it appears
        try {

            const checkLaterButton = this.page.getByRole('button', {
                name: /check later/i
            });

            if (await checkLaterButton.isVisible({ timeout: 3000 })) {
                await checkLaterButton.click();
            }

        } catch {

            console.log("No popup");

        }

    }
    async createTask(taskName: string, description: string) {

        await this.addTaskButton.click();

        await this.taskName.fill(taskName);

        await this.taskDescription.fill(description);

        await this.saveTaskButton.click();

        await this.page.waitForTimeout(2000);

    }
    async updateTask(
        oldTaskName: string,
        newTaskName: string,
        newDescription: string
    ) {
        // Open task
        await this.page.getByText(oldTaskName, { exact: true }).click();

        // Wait for details panel
        await expect(this.taskNameButton).toBeVisible();

        // Enter edit mode
        await this.taskNameButton.click();

        // Wait for textbox to appear
        await expect(this.taskNameTextbox).toBeVisible();

        // Edit title
        await this.taskNameTextbox.press('Control+A');
        await this.taskNameTextbox.fill(newTaskName);

        // Click description to edit
        await this.taskDescriptionTextbox.click();
        await expect(this.taskDescriptionTextbox).toBeFocused();

        // Update description
        await this.taskDescriptionTextbox.press('Control+A');
        await this.taskDescriptionTextbox.fill(newDescription);

        // Save changes
        await this.updateTaskButton.click();

    }
    async deleteTask(taskName: string) {

        await this.page
            .getByRole('button', {
                name: new RegExp(`Task:\\s+${taskName}`)
            })
            .first()
            .click();
        // Open More menu
        await this.moreMenuButton.click();

        // Click Delete
        await this.deleteMenuItem.click();

        // Confirm Delete
        await this.confirmDeleteButton.click();

    }
}
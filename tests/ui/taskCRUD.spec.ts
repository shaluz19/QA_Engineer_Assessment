import { test, expect } from '../../fixtures/baseTest';
import { TASK_NAME, TASK_DESCRIPTION, UPDATED_TASK_1, UPDATED_DESCRIPTION_1 } from '../../utils/testData';

const TASK_TITLE = `${TASK_NAME} ${Date.now()}`;
const UPDATED_TASK_TITLE = `Updated ${TASK_TITLE}`;

test('Create Todo Task', async ({ page, todo }) => {

    await todo.createTask(
        TASK_TITLE,
        TASK_DESCRIPTION
    );
    await expect(
        page.getByText(TASK_TITLE).first()
    ).toBeVisible();
});

test('Update Todo Task', async ({ page, todo }) => {

    await todo.updateTask(
        TASK_TITLE,
        UPDATED_TASK_TITLE,
        UPDATED_DESCRIPTION_1
    );
    await expect(
        page.getByText(UPDATED_TASK_TITLE, { exact: true }).first()
    ).toBeVisible();
});

test('Delete Todo Task', async ({ page, todo }) => {

    await todo.deleteTask(UPDATED_TASK_TITLE);

    await expect(
        page.getByText(UPDATED_TASK_TITLE, { exact: true })
    ).toHaveCount(0);
});




import styled from "styled-components";

export const MenubarContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
    padding: 0 25px;
    position: static;
    top: 0;
    background-color: white;
    // z-index: 1000;
    border-radius: 8px;
    max-height: calc(100vh - 64px - 32px);
    padding: 16px;

    .cursorLabel {
        cursor: pointer;
    }
`;
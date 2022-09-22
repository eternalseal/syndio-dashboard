import { Menu, MenuButton, MenuList, MenuItem } from "@reach/menu-button";
import React from "react";

import { GroupNames } from "../../types/groups/group-names";

type Props = {
  selectedOption: string;
  handleOptionChange: (id: string) => void;
  parsedGroup?: string;
  groupNameData?: GroupNames;
};

const GroupMenu = ({
  selectedOption,
  groupNameData,
  parsedGroup,
  handleOptionChange,
}: Props) => {
  return (
    <Menu>
      {({ isExpanded }) => (
        <React.Fragment>
          <MenuButton className="inline-flex items-center justify-between h-10 px-4 text-white border-transparent rounded w-50 bg-select-bg active:outline-0 active:ring-1 active:ring-select-active">
            {selectedOption}
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className={`${
                isExpanded ? "rotate-180" : "rotate-0"
              } transition-all`}
            >
              <path
                fill="currentColor"
                d="M82.745 274.746c24.993-24.995 65.516-24.995 90.509 0l338.745 338.746 338.746-338.746c24.992-24.995 65.517-24.995 90.509 0 24.995 24.992 24.995 65.517 0 90.509l-384 384c-24.992 24.994-65.517 24.994-90.509 0l-384-384c-24.994-24.992-24.994-65.517 0-90.509z"
              />
            </svg>
          </MenuButton>
          <MenuList className="grid gap-4 p-2 mt-1 bg-white shadow-md w-50">
            <MenuItem onSelect={() => {}} className="cursor-auto text-label">
              Change Group
            </MenuItem>
            {groupNameData?.map((groupNameDatum) => {
              return (
                <MenuItem
                  key={groupNameDatum.id}
                  onSelect={() => handleOptionChange(groupNameDatum.id)}
                  className={`cursor-pointer ${
                    parsedGroup === groupNameDatum.id
                      ? "text-inactive-text/30"
                      : "text-active-text"
                  }`}
                >
                  {groupNameDatum.label}
                </MenuItem>
              );
            })}
          </MenuList>
        </React.Fragment>
      )}
    </Menu>
  );
};

export default GroupMenu;

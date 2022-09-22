import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Menu, MenuList, MenuButton, MenuItem } from "@reach/menu-button";
import { useQuery } from "@tanstack/react-query";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styles from "styles/tabs.module.css";

import GroupMenu from "../components/GroupMenu";
import InfoList from "../components/InfoList";
import Loader from "../components/Loader";
import { getGroupByData, getGroupNames } from "../services/group";
const Home: NextPage = () => {
  const router = useRouter();
  const { group } = router.query;
  const parsedGroup = typeof group === "string" ? group : undefined;

  const { api: getGroupNameApi, getKey: getGroupNameKey } = getGroupNames();
  const { data: groupNameData } = useQuery(getGroupNameKey(), getGroupNameApi, {
    staleTime: 20000,
  });

  const { api: getGroupDataApi, getKey: getGroupDataKey } =
    getGroupByData(parsedGroup);
  const { data: groupData, isLoading: groupDataIsLoading } = useQuery(
    getGroupDataKey(),
    getGroupDataApi,
    {
      staleTime: 20000,
    },
  );

  const handleOptionChange = (id: string) => {
    router.push({
      pathname: "./",
      query: {
        group: id,
      },
    });
  };

  const selectedOption = React.useMemo(() => {
    const foundGroup = groupNameData?.find((group) => group.id === parsedGroup);
    if (foundGroup) return foundGroup.label;
    // default value
    return "Group by Function";
  }, [groupNameData, parsedGroup]);

  return (
    <div className="min-h-screen ">
      <header className="flex items-center justify-between py-[15px] bg-nav-bg px-6">
        <Image width={160} height={32} src="/svg/syndio-logo.svg" alt="Logo" />

        <GroupMenu
          selectedOption={selectedOption}
          parsedGroup={parsedGroup}
          handleOptionChange={handleOptionChange}
          groupNameData={groupNameData}
        />
      </header>
      <main>
        <Tabs defaultValue="gender" className="bg-body-bg">
          <TabsList className="flex px-6 pt-6 border-b bg-header-bg">
            <TabsTrigger
              value="gender"
              className={`${styles.tabs__trigger} transition py-2.5 text-sm bg-header-bg text-inactive-text w-50`}
            >
              Gender
            </TabsTrigger>
            <TabsTrigger
              value="race"
              className={`${styles.tabs__trigger} transition py-2.5 text-sm bg-header-bg text-inactive-text w-50`}
            >
              Race
            </TabsTrigger>
          </TabsList>

          <section className="p-6">
            {groupDataIsLoading ? (
              <Loader />
            ) : (
              <>
                <TabsContent value="gender">
                  {groupData?.data.gender != null ? (
                    <InfoList data={groupData?.data.gender} />
                  ) : null}
                </TabsContent>
                <TabsContent value="race">
                  {groupData?.data.race != null ? (
                    <InfoList data={groupData?.data.race} />
                  ) : null}
                </TabsContent>
              </>
            )}
          </section>
        </Tabs>
      </main>
    </div>
  );
};

export default Home;
